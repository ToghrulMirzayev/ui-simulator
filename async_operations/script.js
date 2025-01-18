document.addEventListener('DOMContentLoaded', function() {
    function simulateAsyncRequest(delay = 1000) {
        return new Promise(resolve => setTimeout(resolve, delay));
    }

    const loadDataBtn = document.getElementById('loadDataBtn');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const loadedData = document.getElementById('loadedData');
    const checkIcon = document.getElementById('checkIcon');
    const loadingDelay = document.getElementById('loadingDelay');
    const delayError = document.getElementById('delayError');

    function validateDelay() {
        const value = parseInt(loadingDelay.value, 10);
        if (isNaN(value) || value < 1 || value > 50) {
            delayError.textContent = 'Please enter a number between 1 and 50';
            loadDataBtn.disabled = true;
            return false;
        } else {
            delayError.textContent = '';
            loadDataBtn.disabled = false;
            return true;
        }
    }

    loadingDelay.addEventListener('input', validateDelay);

    loadDataBtn.addEventListener('click', async () => {
        if (!validateDelay()) return;

        const maxDelay = parseInt(loadingDelay.value, 10) * 1000;
        const randomDelay = Math.round(Math.random() * (maxDelay - 1000)) + 1000;
        
        loadingIndicator.style.display = 'inline-block';
        checkIcon.style.display = 'none';
        loadedData.textContent = '';
        
        try {
            await simulateAsyncRequest(randomDelay);
            loadingIndicator.style.display = 'none';
            checkIcon.style.display = 'inline-block';
            loadedData.textContent = `Data successfully loaded after ${Math.round(randomDelay / 1000)} seconds!`;
        } catch (error) {
            loadedData.textContent = 'Error loading data.';
        }
    });

    const autocompleteInput = document.getElementById('autocompleteInput');
    const autocompleteList = document.getElementById('autocompleteList');

    const programmingLanguages = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'PHP', 'Swift', 'Go', 'Rust', 'TypeScript', 'C#'];

    autocompleteInput.addEventListener('input', debounce(async () => {
        const inputValue = autocompleteInput.value.toLowerCase();
        autocompleteList.innerHTML = '';
        
        if (inputValue.length > 0) {
            await simulateAsyncRequest(300); // Имитация задержки сети
            const matchingLanguages = programmingLanguages.filter(lang => 
                lang.toLowerCase().startsWith(inputValue)
            );
            
            matchingLanguages.forEach(lang => {
                const li = document.createElement('li');
                li.textContent = lang;
                li.addEventListener('click', () => {
                    autocompleteInput.value = lang;
                    autocompleteList.innerHTML = '';
                });
                autocompleteList.appendChild(li);
            });
        }
    }, 300));

    function debounce(func, delay) {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    }

    const infiniteScrollList = document.getElementById('infiniteScrollList');
    let itemCount = 0;

    function addItems() {
        for (let i = 0; i < 10; i++) {
            const li = document.createElement('li');
            li.textContent = `Item ${++itemCount}`;
            infiniteScrollList.appendChild(li);
        }
    }

    infiniteScrollList.addEventListener('scroll', () => {
        if (infiniteScrollList.scrollTop + infiniteScrollList.clientHeight >= infiniteScrollList.scrollHeight - 20) {
            addItems();
        }
    });

    addItems();

    const delayedForm = document.getElementById('delayedForm');
    const formSubmitStatus = document.getElementById('formSubmitStatus');

    delayedForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        formSubmitStatus.textContent = 'Submitting form...';
        
        try {
            await simulateAsyncRequest(2000);
            formSubmitStatus.textContent = 'Form submitted successfully!';
        } catch (error) {
            formSubmitStatus.textContent = 'Error submitting form.';
        }
    });

    const errorBtn = document.getElementById('errorBtn');
    const errorMessage = document.getElementById('errorMessage');

    errorBtn.addEventListener('click', async () => {
        errorMessage.textContent = 'Processing request...';
        
        try {
            await new Promise((resolve, reject) => setTimeout(() => reject(new Error('Simulated error')), 1000));
        } catch (error) {
            errorMessage.textContent = `An error occurred: ${error.message}`;
        }
    });

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
});