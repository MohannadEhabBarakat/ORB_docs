import os
import glob

directory = "/root/orb/docs/src/content/docs/backend/code"
for filepath in glob.glob(os.path.join(directory, "*.md")):
    with open(filepath, "r") as f:
        content = f.read()
    if not content.startswith("---"):
        filename = os.path.basename(filepath)
        title = filename[:-3] # remove .md
        new_content = f"---\ntitle: {title}\n---\n\n" + content
        with open(filepath, "w") as f:
            f.write(new_content)
