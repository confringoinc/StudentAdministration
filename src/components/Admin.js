import React, { useState, useEffect, lazy, useMemo } from 'react';
import { useLocation, useHistory } from 'react-router';
import { retry } from '../utils/CommonFunctions';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useTable, usePagination, useSortBy, useGlobalFilter, useFilters } from 'react-table';
import { FiChevronRight, FiChevronLeft, FiChevronsLeft, FiChevronsRight, FiChevronDown, FiChevronUp, FiTrash, FiEdit3 } from 'react-icons/fi';
const Login = lazy(() => retry(() => import('./Login')));

const Admin = () => {
  const location = useLocation();
  const token = location.state;
  const [dataStudents, setDataStudents] = useState([]);

  const history = useHistory();
  const handleEdit = (values) => {
    history.push({
      pathname: '/edit/' + values.enrollmentNo,
      state: {
        token: token,
        data: values
      }
    });
  };

  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  }

  const handleDelete = (enrollmentNo) => {
    if (window.confirm('Are you sure?')) {
      axios.delete('http://localhost:3000/admin/delete-student/' + enrollmentNo, { "headers": headers })
        .then(function (response) {
          if (response.data.success === true) {
            window.location.reload()
          }
          else {
            alert("Account deletion failed...");
          }
        })
        .catch(function () {
          alert("Account deletion failed...");
        })
    }
  };

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    const params = {
      page: 1,
      limit: 10000
    }

    const getData = () => {
      axios.get('http://localhost:3000/admin/get-students', { "params": params, "headers": headers })
        .then(function (response) {
          setDataStudents(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    getData();
  }, [token]);

  const columns = useMemo(
    () => [
      {
        Header: '#',
        accessor: 'index',
        Cell: ({row}) => (
          <>{parseInt(row.id)+1}</>
        )
      },
      {
        Header: 'Edit',
        accessor: 'edit',
        Cell: ({ cell }) => (
          <button className="btn btn-primary" onClick={() => handleEdit(cell.row.values)}>
            <FiEdit3 />
          </button>
        )
      },
      {
        Header: 'Delete',
        accessor: 'delete',
        Cell: ({ cell }) => (
          <button className="btn btn-danger" onClick={() => handleDelete(cell.row.values.enrollmentNo)}>
            <FiTrash />
          </button>
        )
      },
      {
        Header: 'Enrollment No',
        accessor: 'enrollmentNo',
      },
      {
        Header: 'First name',
        accessor: 'firstName',
      },
      {
        Header: 'Last name',
        accessor: 'lastName',
      },
      {
        Header: 'Semester',
        accessor: 'semester',
      },
      {
        Header: 'DOB',
        accessor: 'dob',
      },
      {
        Header: 'Gender',
        accessor: 'gender',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Mobile No',
        accessor: 'mobileNo',
      },
      {
        Header: 'Branch',
        accessor: 'branch',
      },
      {
        Header: 'Created At',
        accessor: 'createdAt',
      },
      {
        Header: 'Updated At',
        accessor: 'updatedAt',
      }
    ],
    []
  );

  const tableInstance = useTable({ columns, data: dataStudents }, useFilters, useGlobalFilter, useSortBy, usePagination);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    preGlobalFilteredRows,
    state: { pageIndex, pageSize },
  } = tableInstance;

  const [value, setValue] = useState(state.globalFilter);
  const handleOnChange = (e) => {
    setValue(e.target.value);
    setGlobalFilter(e.target.value || undefined);
  }

  return (
    token ?
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <div className="navbar-brand">Student<span className="text-primary">Center</span></div>
            <div>
              <Link to='/login'>Log out</Link>
            </div>
          </div>
        </nav>
        <div className="container mt-5">
          <h2>Students data</h2>
          <div className="d-flex justify-content-end">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <input
                id="search"
                className="form-control"
                onChange={handleOnChange}
                value={value || ""}
                placeholder={`Serach in ${preGlobalFilteredRows.length} records...`}
              />
            </div>
          </div>
          <div className="table-responsive">
            <table className="mt-3 table table-striped align-middle" {...getTableProps()}>
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th className="text-nowrap" {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render('Header')}
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? <span className="ms-2">
                                <FiChevronDown />
                              </span>
                              : <span className="ms-2">
                                <FiChevronUp />
                              </span>
                            : ''}
                        </span>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                  prepareRow(row)
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => {
                        return <td className="text-nowrap" {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="pagination mb-5 row align-items-center">
            <div className="col mt-3">
              Page <span className="text-weight-bold">{pageIndex + 1} of {pageOptions.length}</span>
            </div>
            <div className="col-md-4 col-6 mt-3">
              <div className="row">
                <div className="col-auto">
                  <label htmlFor="goto" className="col-form-label">Go to page</label>
                </div>
                <div className="col-auto">
                  <input
                    id="goto"
                    className="form-control"
                    type="number"
                    defaultValue={pageIndex + 1}
                    onChange={e => {
                      const page = e.target.value ? Number(e.target.value) - 1 : 0
                      gotoPage(page)
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-2 col-6 mt-3">
              <select
                className="form-select"
                value={pageSize}
                onChange={e => {
                  setPageSize(Number(e.target.value))
                }}
              >
                {[10, 20, 30, 40, 50].map(pageSize => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-auto col-6 mt-3">
              <button className="btn btn-outline-primary" onClick={() => gotoPage(0)} disabled={!canPreviousPage}><FiChevronsLeft /></button>
              <button className="btn btn-outline-primary" onClick={() => previousPage()} disabled={!canPreviousPage}><FiChevronLeft /></button>
              <button className="btn btn-outline-primary" onClick={() => nextPage()} disabled={!canNextPage}><FiChevronRight /></button>
              <button className="btn btn-outline-primary" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}><FiChevronsRight /></button>
            </div>
          </div>
        </div>
      </> : <Login />
  )
}

export default Admin
