// out-domain.com/new-meetup

import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const addMeetupHandler = (newMeetup) => {
    console.log(newMeetup);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
