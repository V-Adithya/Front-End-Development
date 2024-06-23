### Git Command for Branching:

#### Creating a New Branch:
```bash
git checkout -b <branch_name>
```

**Note**: `git checkout -b` creates a new branch with the specified name and switches to it. Branching is fundamental in Git for isolating work, enabling parallel development, and organizing code changes.

### Git Command for Committing Changes:

#### Committing Changes:
```bash
git commit -m "Commit message"
```

**Note**: `git commit` records changes to the repository along with a descriptive message. Commits are essential for tracking modifications, providing a history of project evolution, and facilitating collaboration among developers. Each commit represents a snapshot of the project at a specific point in time.

### Git Command for Pushing Changes:

#### Pushing Changes to Remote Repository:
```bash
git push <remote_name> <branch_name>
```

**Note**: `git push` uploads local branch commits to a remote repository, enabling synchronization between local and remote versions of the codebase. It's crucial for sharing work with collaborators and maintaining a centralized repository that reflects the latest changes.

### Git Command for Pulling Changes:

#### Pulling Changes from Remote Repository:
```bash
git pull <remote_name> <branch_name>
```

**Note**: `git pull` retrieves changes from a remote repository and merges them into the current branch. It ensures that the local repository is up-to-date with the latest changes from the remote, facilitating collaborative development and preventing divergence between local and remote versions.

### Git Command for Viewing Commit History:

#### Viewing Commit History:
```bash
git log
```

**Note**: `git log` displays a chronological list of commits in the repository, including commit messages, authors, timestamps, and commit hashes. It provides insight into project evolution, code contributions, and the sequence of changes made over time, aiding in debugging and understanding project history.

### Git Command for Checking Repository Status:

#### Checking Repository Status:
```bash
git status
```

**Note**: `git status` provides information about the current state of the working directory and staging area. It shows which files are modified, untracked, or staged for commit, helping developers track changes and manage their workflow effectively.

### Git Command for Staging Changes:

#### Staging Changes for Commit:
```bash
git add <file_name>
```

**Note**: `git add` stages changes in the working directory for the next commit. It prepares modified or new files to be included in the commit, allowing developers to selectively include changes and maintain a clean commit history.

### Git Command for Discarding Changes:

#### Discarding Changes in Working Directory:
```bash
git checkout -- <file_name>
```

**Note**: `git checkout --` discards changes in the working directory for the specified file, reverting it to the state in the last commit. It's useful for undoing modifications and restoring files to their previous state.

### Git Command for Creating Tags:

#### Creating Tags:
```bash
git tag <tag_name>
```

**Note**: `git tag` creates a lightweight tag at the current commit. Tags are used to mark significant points in the project history, such as releases or milestones, providing a way to reference specific commits more easily.

### Git Command for Merging Branches:

#### Merging Branches:
```bash
git merge <branch_name>
```

**Note**: `git merge` combines changes from the specified branch into the current branch. It integrates divergent development efforts, incorporating changes while preserving commit history and resolving any conflicts that may arise.
