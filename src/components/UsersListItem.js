const UsersListItem = ({ user }) => {
  return (
    <div key={user.id} className="mb-2 border rounded flex items-center">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        {user.name}
      </div>
    </div>
  );
};

export default UsersListItem;
