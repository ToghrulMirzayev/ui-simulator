document.addEventListener('DOMContentLoaded', function() {
    const inputData = document.getElementById('inputData');
    const outputData = document.getElementById('outputData');
    const toJsonBtn = document.getElementById('toJson');
    const toYamlBtn = document.getElementById('toYaml');
    const toggleTheme = document.getElementById('toggle-theme');

    function setTheme(isNightMode) {
        document.body.classList.toggle('night-mode', isNightMode);
        toggleTheme.checked = isNightMode;
        localStorage.setItem('nightMode', isNightMode);
    }

    const savedNightMode = localStorage.getItem('nightMode') === 'true';
    setTheme(savedNightMode);

    toggleTheme.addEventListener('change', () => {
        setTheme(toggleTheme.checked);
    });

    function convertToJson(input) {
        try {
            JSON.parse(input);
            return input;
        } catch (e) {
            try {
                return JSON.stringify(jsyaml.load(input), null, 2);
            } catch (e) {
                throw new Error("Invalid input format. Please enter valid JSON or YAML.");
            }
        }
    }

    function convertToYaml(input) {
        try {
            const obj = JSON.parse(input);
            return jsyaml.dump(obj);
        } catch (e) {
            throw new Error("Failed to convert to YAML. Please ensure the input is valid JSON.");
        }
    }

    toJsonBtn.addEventListener('click', () => {
        try {
            const result = convertToJson(inputData.value);
            outputData.value = result;
        } catch (error) {
            outputData.value = "Error: " + error.message;
        }
    });

    toYamlBtn.addEventListener('click', () => {
        try {
            const jsonData = convertToJson(inputData.value);
            const result = convertToYaml(jsonData);
            outputData.value = result;
        } catch (error) {
            outputData.value = "Error: " + error.message;
        }
    });
});