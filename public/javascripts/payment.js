        function validateForm(event) {
            event.preventDefault();

            const cardNumber = document.getElementById('card-number').value.replace(/\s/g, '');
            const expiryDate = document.getElementById('expiry-date').value;
            const cvv = document.getElementById('cvv').value;
            const cardHolder = document.getElementById('card-holder').value;

            const cardNumberPattern = /^\d{16}$/;
            const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{4}$/; // MM/YYYY format
            const cvvPattern = /^\d{3,4}$/; // 3 or 4 digits for CVV
             const cardHolderPattern = /^[A-Za-z]+$/; // Only alphabetic characters

            if (!cardNumberPattern.test(cardNumber)) {
                alert('Please enter a valid 16-digit card number.');
            } else if (!expiryDatePattern.test(expiryDate)) {
                alert('Please enter a valid expiry date in MM/YYYY format.');
            } else if (!cvvPattern.test(cvv)) {
                alert('Please enter a valid CVV (3 or 4 digits).');
            } else if (cardHolder.trim() === '') {
                alert('Please enter the card holder\'s name.');
            }
            else if (!cardHolderPattern.test(cardHolder)) {
                alert('Please enter a valid card holder\'s name (only alphabetic characters).');
            }  else {
                window.location.href = '/thankyou';
            }
        }