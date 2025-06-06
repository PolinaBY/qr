 document.querySelectorAll('.service-header').forEach(header => {
            header.addEventListener('click', function() {
                const content = this.nextElementSibling;
                const plusIcon = this.querySelector('.plus-icon');
                
                content.classList.toggle('active');
                plusIcon.classList.toggle('rotated');
            });
        });

        document.querySelector('.submit-btn').addEventListener('click', function() {
            alert('Your order has been submitted successfully!');
            // Here you would normally send data to server
        });
