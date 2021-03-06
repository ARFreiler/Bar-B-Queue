const newFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#event-name').value.trim();
    const location = document.querySelector('#event-location').value.trim();
    const description = document.querySelector('#event-desc').value.trim();

    if (name && location && description) {
        const response = await fetch(`/api/events`, {
            method: 'POST',
            body: JSON.stringify({ name, location, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        }else {
            alert('Failed to create event')
        }
    }
};

const delButtonHandler =  async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/events/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        }else {
            alert('Failed to delete event');
        }
    }
};

document
    .querySelector('.new-event-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.event-list')
    .addEventListener('click', delButtonHandler);