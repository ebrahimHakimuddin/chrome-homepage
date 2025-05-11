# Custom New Tab Page

## Current Features
- [x] Search using Unduck and its bang symbols ("!") [No Search Bar as Chrome does not allow Search Bar's To Take Focus on New Tabs].
- [x] A Note Taking / To Do Section using Local Storage.
- [x] An Embed to T3.chat. 

## Planned Features:
- [ ] Implement Custom Search.
- [ ] Implement Sync For The Notes / TODO [Opt In].
- [ ] Implement A Calulator Module.
- [ ] Implement A Way For T3.chat to allow login.[Google Sign on does not allow it in embedded sites]


## How To Install:
- Clone the Repository
  ```
  git clone https://github.com/ebrahimHakimuddin/chrome-homepage.git
  ```
- cd into Repo:
    ```
    cd chrome-homepage/
    ```
- run pnpm install:
    ```
    pnpm install
    ```
- build:
    ```
    pnpm run build
    ```

- Go to google chrome or any chromium-based browser and navigate to: `chrome://extensions`
- On the Top Right you should see a "Load unpacked" button click on it and point it to the `dist/` folder you just made.
- If done correctly this should be your New Tab Page.
- New Feature: You can now take a snapshot of the current open tabs (as a workspace) and save it to localstorage (as an alternative to tab groups and bookmarks) and then load them or delete as required much faster then managing bookmarks or creating tab groups(which do not persist) 