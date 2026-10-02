let currentSeatCode = "";
let isSeatValid = false;
let totalRevenue = 0;
let totalTrips = 0;

let choice;

while(true){
    choice = Number(prompt("===============================\n",
        "HE THONG BAN VE NHA XE GREENLINE BUS\n",
        "=======================================",
        "1. Nhập và kiểm chuẩn mã đặt chỗ\n",
        "2. Tính tiền vé xe khách\n",
        "3. Thẩm định mã vé xe may mắn\n",
        "0. Thoát chương trình\n",
        "=======================================",
        "Vui lòng nhập lựa chọn của bạn(0-3): "
    )).trim();

    switch(choice){
    case 1:
        let input = prompt("Nhập mã đặt chỗ :").trim().toUpperCase();
        if (input < 6){
            console.log("Loi : Do dai nho hon 6 ky tu");
        }
        let start = input.startsWith("BUS-");
        if (start == false){
            console.log("Loi sai tien to BUS")
        }
        let space = input.includes(" ");
        if (space == true){
            console.log("Loi chua khoang trang o giua")
        }

        currentSeatCode = input ;
        isSeatValid = true;

        

    }
}
