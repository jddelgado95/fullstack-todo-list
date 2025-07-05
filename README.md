# fullstack-todo-list

Full-stack project for learning Node.js (backend) and React (frontend).

# Tech stack

```bash
fullstack-todo-list/
├── client/         <-- React frontend
└── server/         <-- Node.js + Express backend
```

# Instructions

## Raise server:

```bash
$ cd server
$ npm init -y
$ npm install express cors body-parser
```

## Raise fronted:

```bash
npx create-react-app client
cd client
npm install axios
```

## Run the project:

### Start backend:

```bash
node server/index.js
```

### Start frontend:

```bash
cd client/
npm start
```

Open http://localhost:3000

# Troubleshooting:

## Node.js version outdated:

The error:

```javascript
internal/modules/cjs/loader.js:905
  throw err;
  ^
Error: Cannot find module 'node:events'
```

Happens when Node.js version is outdated and doesn't support the node: specifier.

To fix it, upgrade to Node.js v16 or later to support modern syntax.

To check your version:

```bash
node -v
```

If it's older than v16:

- Windows/macOS: Use https://nodejs.org and install the latest LTS version.
- With nvm (Node Version Manager)

Install nvm (for macOS / Linux). Open the terminal and run:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Then, add this to your terminal config (for zsh, it's ~/.zshrc):

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

To apply changes immediately:

```bash
source ~/.zshrc
```

Then check that nvm is available:

```bash
nvm --version
```

Install and Use Latest LTS Node.js (v18 or later):

```bash
nvm install --lts
nvm use --lts
```

Now check:

```bash
node -v
```

You should see something like:

```bash
v18.19.0
```
