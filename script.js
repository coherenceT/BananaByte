// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Copy to Clipboard Functionality
    const copyButton = document.querySelector('.ctc-block-copy');
    const copyContent = document.getElementById('address-text');

    if (copyButton && copyContent) {
        copyButton.addEventListener('click', async function() {
            try {
                await navigator.clipboard.writeText(copyContent.value);
                // Temporary visual feedback instead of alert
                const originalText = this.querySelector('.ctc-button-text').textContent;
                this.querySelector('.ctc-button-text').textContent = 'Copied!';
                this.style.background = 'linear-gradient(45deg, #00ff00, #00ff00)';
                
                setTimeout(() => {
                    this.querySelector('.ctc-button-text').textContent = originalText;
                    this.style.background = 'linear-gradient(45deg, var(--secondary), var(--accent))';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
                alert('Failed to copy address. Please manually select and copy.');
            }
        });
    }

    // Countdown Timer Functionality (keep existing implementation)
    // ... rest of your countdown code ...
});