
import { Column } from 'react-table';
import AdminSidebar from '../components/AdminSidebar'
import { ReactElement, useCallback, useState } from 'react';
import TableHOC from '../components/TableHOC';
import { FaTrash } from 'react-icons/fa';

interface Datatype {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}

const columns: Column<Datatype>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];


const img = "https://randomuser.me/api/portraits/women/54.jpg";
const img2 = "https://randomuser.me/api/portraits/women/50.jpg";

const arr: Datatype[] = [
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img}
        alt="Shoes"
      />
    ),
    name: "Emily Palmer",
    email: "emily.palmer@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },

  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img2}
        alt="Shoes"
      />
    ),
    name: "May Scoot",
    email: "aunt.may@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];

const Customers= () => {
  const [data] = useState<Datatype[]>(arr);
  const Table = useCallback(
    TableHOC<Datatype>(
      columns,
      data,
      "dashboard-product-box",
      "Customers",
      true
    ),
    []
  );
  return (
    <div className="adminContainer">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main */}
      <main>{Table()}</main>
    </div>
  )
}

export default Customers