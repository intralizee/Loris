/*global self: false, Blob: false */
self.addEventListener('message', function (e) {
    "use strict";
    let i = 0;
    console.log(1);
    console.log(e);
    let data = e.data.data; // $("#data").dataTable().fnGetData()
    let headers = e.data.headers; // $("#data thead th")
    let identifiers = e.data.identifiers;
    let content = ''; // new Blob(),
    let escapeQuote = function(val) {
        if (val && typeof val === 'string') {
            return val.replace(/"/g, '""');
        } else if (val && typeof val === 'object' && val.type === 'a') {
            return val.props.children;
        }
        return val;
    };
    console.log(2);
    // var fs;
    let contentBlob;

    let row = (identifiers) ? ['Identifiers'] : [];
    row = row.concat(headers);
    row = row.map(function(val) {
        if (val) {
            return val.replace('"', '""');
        }
        return val;
    });
    console.log(3);
    console.log('row is');
    console.log(row);
    content += '"' + row.join('","') + '"\r\n';
    console.log(content);
    for (i = 0; i < data.length; i += 1) {
        row = (identifiers) ? [identifiers[i]] : [];
        row = row.concat(
          data[i].map(escapeQuote)
        );
        content += '"' + row.join('","') + '"\r\n';
    }
    contentBlob = new Blob([content], {type: 'text/csv'});
    // fs = saveAs(contentBlob, "data.csv");
    // fs = new FileSaverSync(contentBlob, "data.csv");
    self.postMessage({cmd: 'SaveCSV', message: contentBlob});

});
