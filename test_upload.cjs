
const testUpload = async () => {
    try {
        const response = await fetch('http://localhost:5001/api/utils/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                buffer: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
                public_id: null
            })
        });
        const data = await response.json();
        if (response.ok) {
            console.log('Success:', data);
        } else {
            console.error('Failure:', data);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
};

testUpload();
