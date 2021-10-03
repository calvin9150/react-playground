import React, { useEffect, useState } from "react";
import { Grid } from "../elements";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import { realtime } from "../shared/firebase";

const Notification = (props) => {
  const [noti, setNoti] = useState([]);

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (!user) {
      return;
    }

    const notiDB = realtime.ref(`noti/${user.uid}/list`);

    // firebase realtime database는 내림차순 정렬을 지원하지 않음
    // 데이터를 가져온 후 직접 역순으로 내보냄
    const _noti = notiDB.orderByChild("insert_dt");

    _noti.once("value", (snapshot) => {
      if (snapshot.exists()) {
        let _data = snapshot.val();

        // reserse()는 배열을 역순으로 뒤집기
        let _noti_list = Object.keys(_data)
          .reverse()
          .map((s) => {
            return _data[s];
          });

        setNoti(_noti_list);
      }
    });
  }, [user]);

  return (
    <>
      <Grid padding="16px" bg="#EFF6FF">
        {noti.map((n) => {
          return <Card {...n} key={n.post_id} />;
        })}
      </Grid>
    </>
  );
};

export default Notification;
