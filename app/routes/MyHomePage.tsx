export function MyHomePage(){
    return(
        <div className="relative bg-white p-4 m-4 rounded-xl" style={{width: "25%;", marginLeft: "38%;"}}>
          <h1 className="text-xl">ข้อมูลส่วนตัว</h1>
            <div className="grid grid-cols-2 gap-4 p-2">
              <div>
                <p>ชื่อ-นามสกุล :</p>
              </div>
              <div>
                <p>นายปฎิภัทร จันทร์สี่ทิศ</p>
              </div>
              <div>
                <p>รหัสนักศึกษา :</p>
              </div>
              <div>
                <p>026640491040-5</p>
              </div>
              <div>
                <p>เบอร์โทรศัพท์ :</p>
              </div>
              <div>
                <p>0908899657</p>
              </div>
              <div>
                <p>Email :</p>
              </div>
              <div>
                <p>patipat.cha@rmutto.ac.th</p>
              </div>
            </div>
        </div>
    )
}