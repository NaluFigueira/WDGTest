import React, { useState, useEffect } from 'react';
import sendRequest from '../../utils/fetch';
import { useHistory } from 'react-router-dom';
import { UserContainer, ListContainer, PageCounter } from './styles';
import colors from '../../theme/colorPalette';
import Button from '../../components/Button/Button';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function turnLoadingOff() {
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    sendRequest(`users?page=${page}`,"GET", null,setData,null,turnLoadingOff);
  }, [page])

  function setData(response) {
      setTotalNumberOfPages(response.total_pages);
      setUsers(response.data);
  }

  function userRemoved(user) {
      alert(`Usuário ${user.first_name} ${user.last_name} removido.`);
      turnLoadingOff();
  }

  function deleteUser(user) {
    setLoading(true);
    sendRequest(`users/${user.id}`,"DELETE", null,() => userRemoved(user),null,null);
  }

  function goToHomePage() {
    history.push("/login");
  }

  function goToPage(pageNumber) {
    setPage(pageNumber);

  }

  return(
    <React.Fragment>
        {
            loading && <span>Carregando usuários...</span>
        }
        {
            !loading && 
            <React.Fragment>
                <ListContainer>
            {
                users.map((user) => {
                    return(
                        <UserContainer key={user.id}>
                            <img src={user.avatar} alt={`${user.first_name} ${user.last_name} avatar`}/>
                            <span>{user.first_name} {user.last_name}</span>
                            <span>{user.email}</span>
                            <div>
                                <Button title={"Edit"} onClick={goToHomePage} type={"link-button"} />
                                <Button title={"Remove"} onClick={() => deleteUser(user)} type={"link-button"} color={colors.red} />
                            </div>
                        </UserContainer>
                    );
                })
            }
        </ListContainer>
                <PageCounter>
            {page > 1 && <RiArrowLeftSLine onClick={() => goToPage(page - 1)} color={colors.primary} />}
            <span>{page}/{totalNumberOfPages}</span>
            {page < totalNumberOfPages && 
                <RiArrowRightSLine onClick={() => goToPage(page + 1)} color={colors.primary} />
            }
        </PageCounter>
            </React.Fragment>
        }
    </React.Fragment>
  );
}

export default UsersList;