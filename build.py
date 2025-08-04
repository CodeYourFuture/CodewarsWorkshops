import glob
import os
import shutil
import subprocess
import time


def main():
    root_dir = os.path.dirname(__file__)
    build_dir = os.path.join(root_dir, "build")
    try:
        os.mkdir(build_dir)
    except FileExistsError:
        print(f"{build_dir} already exists - please delete it (backing up any files you want to keep)")
        raise
    shutil.copyfile(os.path.join(root_dir, "cyfCodelab.css"), os.path.join(build_dir, "cyfCodelab.css"))

    # problem-id -> markdown path
    problems = {}

    for problem_dir in sorted(glob.glob("Problem_*_*", root_dir=root_dir)):
        problem_dir = os.path.join(root_dir, problem_dir)
        dir_parts = problem_dir.split("_")
        if len(dir_parts) != 3:
            continue
        _, problem_number, problem_name = dir_parts
        problem_id, problem_file = get_problem_id_and_file(root_dir, problem_dir, problem_name)
        want_problem_id = f"problem-{problem_number.zfill(2)}"
        if problem_id != want_problem_id:
            raise RuntimeError(f"Wrong problem ID for file {problem_file} - expected {want_problem_id}")
        
        if problem_id in problems:
            raise RuntimeError(f"Multiple files defined the same problem {problem_id}: {problem_file} and {problems[problem_id]}")

        problems[problem_id] = problem_file

    index = """<!DOCTYPE html>
<html>
    <body>
        <ul>
"""

    for problem_id, problem_file in problems.items():
        subprocess.check_call(["claat", "export", "-f", "html", "-o", build_dir, problem_file])
        index += f"            <li><a href=\"{problem_id}/index.html\">{problem_id}</a></li>"

    index += """
        </ul>
    </body>
</html>
"""

    for file in glob.glob("*/index.html", root_dir=build_dir):
        file = os.path.join(build_dir, file)
        with open(file, "r") as f:
            content = f.read()
        content.replace("</style>", "</style><link rel=\"stylesheet\" href=\"../cyfCodelab.css\" />")
        with open(file, "w") as f:
            f.write(content)

    with open(os.path.join(build_dir, "index.html"), "w") as f:
        f.write(index)


def get_problem_id_and_file(root_dir, problem_dir, problem_name):
    problem_file = os.path.join(root_dir, problem_dir, f"{problem_name}.md")
    with open(problem_file, "r") as f:
        lines = f.readlines()
    for line in lines:
        if line.startswith("id: "):
            return line[len("id: "):].strip(), problem_file
        elif line == "":
            break
    raise RuntimeError(f"Could not find problem id in {problem_file}")

if __name__ == "__main__":
    main()
