// Create Vue application instance
const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "Hello from Vue!",
        };
    },
    methods: {
        showMessage() {
            // Show message via alert
            alert("Hello from Vue!");

            // Log message to the console
            console.log("Button clicked!");

            // You can also change the message after button click
            this.message = "You clicked the button!";
        }
    }
}).mount('#app');
