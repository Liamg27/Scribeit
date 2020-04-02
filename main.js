var showingSourceCode = false;
        var isInEditMode = true;
    
        function enableEditMode () {
            richTextField.document.designMode = 'On';
        }

        function execCmd (command) {
            richTextField.document.execCommand(command, false, null);
        }

        function execCommandWithArg (command, arg) {
            richTextField.document.execCommand(command, false, arg);
        }

        function toggleSource () {
                if(showingSourceCode) {
                    richTextField.document.getElementsByTagName('body')[0].innerHTML = richTextField.document.getElementsByTagName('body')[0].textContent;
                    showingSourceCode = false;
                }else{
                    richTextField.document.getElementsByTagName('body')[0].textContent = richTextField.document.getElementsByTagName('body')[0].innerHTML;
                    showingSourceCode = true;
                }
        }

        function toggleEdit() {
            if(isInEditMode){
                richTextField.document.designMode = 'Off';
                isInEditMode = false;
            }else{
                richTextField.document.designMode = 'On';
                isInEditMode = true;
            }
        }

        function download(){
            var text = document.getElementById("my-textarea").value;
            text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
            var blob = new Blob([text], { type: "text/plain"});
            var anchor = document.createElement("a");
            anchor.download = "my-filename.txt";
            anchor.href = window.URL.createObjectURL(blob);
            anchor.target ="_blank";
            anchor.style.display = "none"; // just to be safe!
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);
         }