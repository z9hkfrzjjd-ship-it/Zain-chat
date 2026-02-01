self.addEventListener('push', function(event) {
    let data = { title: 'ZAIN NET', body: 'رسالة جديدة وصلت' };
    if (event.data) {
        try { data = event.data.json(); } 
        catch (e) { data = { title: 'ZAIN NET', body: event.data.text() }; }
    }
    const options = {
        body: data.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968875.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/5968/5968875.png'
    };
    event.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(clients.openWindow('/'));
});
