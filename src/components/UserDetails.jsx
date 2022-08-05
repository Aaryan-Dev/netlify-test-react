// import module.css here;
const UserDetails = (props) => {
  return (
    <>
      <div data-testid="user-container">
        {/* user image */}
        <div>
          <div>
            <h3 data-testid="user-fname"></h3>
            <h3 data-testid="user-lname"></h3>
          </div>
          <div>
            <p data-testid="user-address"></p>
          </div>
        </div>
        <div>
          <h3 data-testid="user-karma"></h3>
        </div>
        <div>
          <h3 data-testid="user-followers"></h3>
        </div>
        <div>
          <h3 data-testid="user-posts"></h3>
        </div>
        <button data-testid="follow-btn"></button>
      </div>
    </>
  );
};
export default UserDetails;
