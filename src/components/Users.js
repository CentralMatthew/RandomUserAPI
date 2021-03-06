import {useEffect, useState} from "react";
import {getUsers} from "../services/api.service";
import User from "./User";

export default function Users() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value.data.results]));
    }, [])
    return (
      <div>
          {
              users.map(value => <User key ={value.id} item={value}/>)
          }

      </div>
    );
}