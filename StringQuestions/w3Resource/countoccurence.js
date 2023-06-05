let count = 0;
        let newStr;
        function stringOps(main_string, word) {
            newStr = main_string.split(" ")
            for (let index = 0; index < newStr.length; index++) {
                if (newStr[index].indexOf(word) == 0) {
                    count++
                }
            }
            console.log(count)
        }
        stringOps("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "Lorem")