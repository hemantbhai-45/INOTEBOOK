

import Notes from './Notes';

function Home(props) {
 const {showAlert}= props
  return (
    <div>

      {/* Notes rendered correctly */}
      <Notes showAlert={showAlert} />
      
    </div>
  );
}

export default Home;
