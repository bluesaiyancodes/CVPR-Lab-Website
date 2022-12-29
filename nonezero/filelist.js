const input = document.querySelector('input');
const preview = document.querySelector('.file_list');
 
input.addEventListener('change', showTextFile);
 
function showTextFile() {
    const selectedFiles = input.files;
    const list = document.createElement('ul');
    preview.appendChild(list);
 
    for(const file of selectedFiles) {
        const listItem = document.createElement('li');
        const summary = document.createElement('div');
 
        summary.textContent = file.webkitRelativePath;
 
        listItem.appendChild(summary);
        list.appendChild(listItem);
    }
}