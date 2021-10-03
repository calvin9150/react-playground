import React, { useEffect, useState } from "react";
import { Notifications } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { useSelector } from "react-redux";

import { realtime } from "../shared/firebase";

const NotiBadge = (props) => {
  const [is_read, setIsRead] = useState(true);
  const user_id = useSelector((state) => state.user.user.uid);
  const notiDB = realtime.ref(`noti/${user_id}`);

  const notiCheck = () => {
    notiDB.update({ read: true });
    props._onClick();
  };

  useEffect(() => {
    notiDB.on("value", (snapshot) => {
      setIsRead(snapshot.val()?.read);
    });

    return () => notiDB.off();
  }, []);

  return (
    <>
      <Badge
        invisible={is_read}
        color="secondary"
        onClick={notiCheck}
        variant="dot"
      >
        <Notifications />
      </Badge>
    </>
  );
};

NotiBadge.defaultProps = {
  _onClick: () => {},
};

export default NotiBadge;
