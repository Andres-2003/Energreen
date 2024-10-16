// Function to render the table in HTML format
exports.renderConsMensual= (consMensual) => {
    let html = `
        <html>
        <head>
            <title>Calculadora On Grid</title>
            <style>
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                table, th, td {
                    border: 1px solid black;
                }
                th, td {
                    padding: 10px;
                    text-align: left;
                }
            </style>
        </head>
        <body>
            <h1>Calculadora On Grid</h1>
            <h3>Consumo Mensual</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Mes 1</th>
                        <th>Mes 2</th>
                        <th>Mes 3</th>
                        <th>Mes 4</th>
                        <th>Mes 5</th>
                        <th>Mes 6</th>
                        <th>Mes 8</th>
                        <th>Mes 7</th>
                        <th>Mes 9</th>
                        <th>Mes 10</th>
                        <th>Mes 11</th>
                        <th>Mes 12</th>
                    </tr>
                </thead>
                <tbody>
                ${consMensual.map(mes => `
                    <tr>
                        <td>${mes.id}</td>
                        <td>${mes.mes1}</td>
                        <td>${mes.mes2}</td>
                        <td>${mes.mes3}</td>
                        <td>${mes.mes4}</td>
                        <td>${mes.mes5}</td>
                        <td>${mes.mes6}</td>
                        <td>${mes.mes7}</td>
                        <td>${mes.mes8}</td>
                        <td>${mes.mes9}</td>
                        <td>${mes.mes10}</td>
                        <td>${mes.mes11}</td>
                        <td>${mes.mes12}</td>
                    </tr>
                `).join('')}
                </tbody>
            </table>
    `;
    


    return html;
};


exports.renderConsDiario= (consDiario) => {
    let html = `
            <h3>Consumo Diario</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Mes 1</th>
                        <th>Mes 2</th>
                        <th>Mes 3</th>
                        <th>Mes 4</th>
                        <th>Mes 5</th>
                        <th>Mes 6</th>
                        <th>Mes 8</th>
                        <th>Mes 7</th>
                        <th>Mes 9</th>
                        <th>Mes 10</th>
                        <th>Mes 11</th>
                        <th>Mes 12</th>
                    </tr>
                </thead>
                <tbody>
                ${consDiario.map(mesCD => `
                    <tr>
                        <td>${mesCD.id}</td>
                        <td>${mesCD.consDMes1}</td>
                        <td>${mesCD.consDMes2}</td>
                        <td>${mesCD.consDMes3}</td>
                        <td>${mesCD.consDMes4}</td>
                        <td>${mesCD.consDMes5}</td>
                        <td>${mesCD.consDMes6}</td>
                        <td>${mesCD.consDMes7}</td>
                        <td>${mesCD.consDMes8}</td>
                        <td>${mesCD.consDMes9}</td>
                        <td>${mesCD.consDMes10}</td>
                        <td>${mesCD.consDMes11}</td>
                        <td>${mesCD.consDMes12}</td>
                    </tr>
                `).join('')}
                </tbody>
            </table>
        </body>
        </html>
    `;
    return html;
};


// exports.renderConsDiario= (consDiario) => {
//     let html = `
//             <h3>Consumo Diario</h3>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Mes 1</th>
//                         <th>Mes 2</th>
//                         <th>Mes 3</th>
//                         <th>Mes 4</th>
//                         <th>Mes 5</th>
//                         <th>Mes 6</th>
//                         <th>Mes 8</th>
//                         <th>Mes 7</th>
//                         <th>Mes 9</th>
//                         <th>Mes 10</th>
//                         <th>Mes 11</th>
//                         <th>Mes 12</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 ${consDiario.map(mesCD => `
//                     <tr>
//                         <td>${mesCD.id}</td>
//                         <td>${mesCD.consDMes1}</td>
//                         <td>${mesCD.consDMes2}</td>
//                         <td>${mesCD.consDMes3}</td>
//                         <td>${mesCD.consDMes4}</td>
//                         <td>${mesCD.consDMes5}</td>
//                         <td>${mesCD.consDMes6}</td>
//                         <td>${mesCD.consDMes7}</td>
//                         <td>${mesCD.consDMes8}</td>
//                         <td>${mesCD.consDMes9}</td>
//                         <td>${mesCD.consDMes10}</td>
//                         <td>${mesCD.consDMes11}</td>
//                         <td>${mesCD.consDMes12}</td>
//                     </tr>
//                 `).join('')}
//                 </tbody>
//             </table>
//         </body>
//         </html>
//     `;
//     return html;
// };