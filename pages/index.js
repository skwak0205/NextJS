import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A first Meetup',
    image:
      'https://images.unsplash.com/photo-1546874177-9e664107314e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VvdWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    address: 'Seoul, South Korea',
    description: 'This is a first meetup!',
  },

  {
    id: 'm2',
    title: 'A second Meetup',
    image:
      'https://images.unsplash.com/photo-1546874177-9e664107314e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VvdWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    address: 'Seoul, South Korea',
    description: 'This is a second meetup!',
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// pre-rendering 중에 실행됨
// export async function getStaticProps() {
//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 10,
//   };
// }

// server side에서 실행됨
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
