document.addEventListener('DOMContentLoaded', async () => {
    // Function to display all workspaces
    function displayWorkspaces() {
        const workspaceList = document.getElementById('workspaceList');
        workspaceList.innerHTML = ''; // Clear existing list

        // Loop through localStorage items
        for (let i = 0; i < localStorage.length; i++) {
            const workspaceName = localStorage.key(i);
            // Ignore 'todo-storage' as to avoid conflict with new tab 'To Do List'
            if(workspaceName === "todo-storage"){
                return
            }
            const workspaceDiv = document.createElement('div');
            workspaceDiv.className = 'workspace-item';
            workspaceDiv.innerHTML = `
                <span>${workspaceName}</span>
                <button class="load-btn" data-workspace="${workspaceName}">Load</button>
                <button class="delete-btn" data-workspace="${workspaceName}">Delete</button>
            `;
            workspaceList.appendChild(workspaceDiv);
        }
    }

    // Save workspace functionality
    const saveButton = document.getElementById('saveWorkspace');
    saveButton.addEventListener('click', async () => {
        const workspaceName = document.getElementById('workspaceName');
        
        if (!workspaceName.value) {
            console.error('Please enter a workspace name');
            return;
        }

        const tabs = await chrome.tabs.query({
            url: ["http://*/*", "https://*/*"],
            currentWindow: true
        });

        const tabUrls = tabs.map(tab => tab.url);
        localStorage.setItem(workspaceName.value, JSON.stringify(tabUrls));
        workspaceName.value = '';
        displayWorkspaces(); // Refresh the list
    });
    document.getElementById('workspaceList').addEventListener('click', async (e) => {
        const workspaceName = e.target.dataset.workspace;
        
        if (e.target.classList.contains('load-btn')) {
            const tabUrls = JSON.parse(localStorage.getItem(workspaceName));
            const currentTabs = await chrome.tabs.query({ currentWindow: true });
            currentTabs.forEach(tab => chrome.tabs.remove(tab.id));
            tabUrls.forEach(url => {
                chrome.tabs.create({ url });
            });
        }
        
        if (e.target.classList.contains('delete-btn')) {
            // Delete workspace
            localStorage.removeItem(workspaceName);
            displayWorkspaces();
        }
    });
    displayWorkspaces();
});