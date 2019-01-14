import React from 'react';
import moment from 'moment';

import '../../../../colors.css';
import './RecentLetOutSnapshot.css';

const RecentLetOutSnapshot = ({ letOuts }) => {
  return (
    <div className="recentLetOutSnapshot">
      <div className="snapshotTime">
        {moment(letOuts[0].dateAndTime).format('LT')}
      </div>
      <div className="snapshotNumber snapshotNumber--leo">{letOuts[0].leo}</div>
      <div className="snapshotNumber snapshotNumber--lucy">
        {letOuts[0].lucy}
      </div>
    </div>
  );
};

export default RecentLetOutSnapshot;
