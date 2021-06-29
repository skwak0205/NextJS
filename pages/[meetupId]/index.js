import MeetupDetail from '../../components/meetups/MeetupDetail';

function MettupDetails() {
  return (
    <MeetupDetail
      image='https://images.unsplash.com/photo-1546874177-9e664107314e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VvdWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
      title='First Meetup'
      address='Seoul, South Korea'
      description='This is a first meetup'
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },

      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          'https://images.unsplash.com/photo-1546874177-9e664107314e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VvdWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
        id: meetupId,
        title: 'First Meetup',
        address: 'Seoul, South Korea',
        description: 'This is a first meetup',
      },
    },
  };
}

export default MettupDetails;
