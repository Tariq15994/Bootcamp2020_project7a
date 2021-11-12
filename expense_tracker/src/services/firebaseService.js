function configureNotification() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
          messaging.getToken().then((currentToken)=>{})
        console.log('Notification permission granted.');
        // TODO(developer): Retrieve a registration token for use with FCM.
        // In many cases once an app has been granted notification permission,
        // it should update its UI reflecting this.
        resetUI();
      } else {
        console.log('Unable to get permission to notify.');
      }
    });
  }