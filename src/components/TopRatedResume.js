import React, { useEffect, useState } from "react";
import axios from 'axios';

const TopRatedResume = () => {
    const [resumeTable, setResumeTable] = useState([]);
    useEffect(() => {
        axios({
            method: 'get',
            url: "https://reqres.in/api/users"
        }).then(response => {
            setResumeTable(response.data.data);
        })
            .catch(error => console.log(error));
    }, []);

    const Fields = [
        {
            path: "id",
            name: "Id"
        },
        {
            path: "avatar",
            name: "Image"
        },
        {
            path: "first_name",
            name: "First Name"
        },
        {
            path: "last_name",
            name: "Last Name"
        },
        {
            path: "email",
            name: "Email"
        }
    ]

    console.log(resumeTable);

    const tableContent = () => {

        return resumeTable.map((record) => (<tr key={record.id}>
                {Fields.map(({ path }) => {
                    console.log(record, path)
                    if (path === "avatar") {
                        return <td key={path}><img src={record[path]} /></td>
                    }
                    return <td key={path}>{record[path]}</td>
                }
                )}
            </tr>)
        )
    }

    return (
        <div className="contact-container">

            <div className="mui-row contact-box">
                <div className="mui-col-md-12">
                    <div className="contact-data">
                        <table className="mui-table mui-table--bordered">
                            <thead>
                                <tr>
                                    {Fields.map(({ path, name }) => <th key={path}>{name}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {tableContent()}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default TopRatedResume;