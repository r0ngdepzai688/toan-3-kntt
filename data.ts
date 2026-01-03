import { Lesson } from './types';

export const LESSONS: Lesson[] = [
  // CHỦ ĐỀ 1: ÔN TẬP VÀ BỔ SUNG
  {
    id: 1, topic: "Ôn tập và bổ sung", title: "Bài 1: Ôn tập các số đến 1000", icon: "🔢", raw_html: "Ôn tập đọc, viết, so sánh các số trong phạm vi 1000.",
    activities: [{ id: "l1-a1", type: "tinh_toan", prompt: "Số gồm 5 trăm, 0 chục, 2 đơn vị là:", data: { display: "500 + 0 + 2" }, answer: 502, hint: "Viết các chữ số theo thứ tự Trăm - Chục - Đơn vị." }]
  },
  {
    id: 2, topic: "Ôn tập và bổ sung", title: "Bài 2: Ôn tập phép cộng, phép trừ", icon: "➕", raw_html: "Cộng, trừ có nhớ và không nhớ trong phạm vi 1000.",
    activities: [{ id: "l2-a1", type: "tinh_toan", prompt: "350 + 250 = ?", data: { n1: 350, n2: 250, symbol: "+" }, answer: 600, hint: "50 + 50 = 100." }]
  },
  {
    id: 3, topic: "Ôn tập và bổ sung", title: "Bài 3: Tìm thành phần chưa biết", icon: "❓", raw_html: "Tìm x trong các phép tính cộng trừ.",
    activities: [{ id: "l3-a1", type: "tinh_toan", prompt: "Tìm x: x - 120 = 200", data: { display: "x - 120 = 200" }, answer: 320, hint: "Số bị trừ = Hiệu + Số trừ." }]
  },
  {
    id: 4, topic: "Ôn tập và bổ sung", title: "Bài 4: Ôn tập bảng nhân 2, 5; chia 2, 5", icon: "✖️", raw_html: "Củng cố kiến thức lớp 2.",
    activities: [{ id: "l4-a1", type: "tinh_toan", prompt: "5 x 9 = ?", data: { n1: 5, n2: 9, symbol: "x" }, answer: 45, hint: "Nhẩm bảng nhân 5." }]
  },
  {
    id: 5, topic: "Ôn tập và bổ sung", title: "Bài 5: Ôn tập hình học & đo lường", icon: "📏", raw_html: "Ôn tập về điểm, đoạn thẳng, hình tam giác, tứ giác.",
    activities: [{ id: "l5-a1", type: "tinh_toan", prompt: "4dm 5cm = ... cm?", data: {}, answer: 45, hint: "1dm = 10cm." }]
  },
  // CHỦ ĐỀ 2: BẢNG NHÂN, BẢNG CHIA
  {
    id: 6, topic: "Bảng nhân, bảng chia", title: "Bài 6: Bảng nhân 3, bảng chia 3", icon: "3️⃣", raw_html: "Học thuộc bảng 3.",
    activities: [{ id: "l6-a1", type: "tinh_toan", prompt: "3 x 7 = ?", data: { n1: 3, n2: 7, symbol: "x" }, answer: 21, hint: "Ba lần bảy bằng mấy?" }]
  },
  {
    id: 7, topic: "Bảng nhân, bảng chia", title: "Bài 7: Bảng nhân 4, bảng chia 4", icon: "4️⃣", raw_html: "Học bảng 4.",
    activities: [{ id: "l7-a1", type: "tinh_toan", prompt: "36 : 4 = ?", data: { n1: 36, n2: 4, symbol: ":" }, answer: 9, hint: "Mấy nhân 4 bằng 36?" }]
  },
  {
    id: 8, topic: "Bảng nhân, bảng chia", title: "Bài 8: Luyện tập chung", icon: "📚", raw_html: "Tổng hợp các bảng tính.",
    activities: [{ id: "l8-a1", type: "toan_loi_van", prompt: "Có 20 bông hoa chia vào 4 lọ. Mỗi lọ có mấy bông?", data: {}, answer: 5, hint: "20 chia 4." }]
  },
  {
    id: 9, topic: "Bảng nhân, bảng chia", title: "Bài 9: Bảng nhân 6, bảng chia 6", icon: "6️⃣", raw_html: "Bắt đầu với bảng 6.",
    activities: [{ id: "l9-a1", type: "tinh_toan", prompt: "6 x 8 = ?", data: { n1: 6, n2: 8, symbol: "x" }, answer: 48, hint: "Sáu lần tám." }]
  },
  {
    id: 10, topic: "Bảng nhân, bảng chia", title: "Bài 10: Bảng nhân 7, bảng chia 7", icon: "7️⃣", raw_html: "Học bảng 7.",
    activities: [{ id: "l10-a1", type: "tinh_toan", prompt: "42 : 7 = ?", data: { n1: 42, n2: 7, symbol: ":" }, answer: 6, hint: "7 x 6 = 42." }]
  },
  {
    id: 11, topic: "Bảng nhân, bảng chia", title: "Bài 11: Bảng nhân 8, bảng chia 8", icon: "8️⃣", raw_html: "Học bảng 8.",
    activities: [{ id: "l11-a1", type: "tinh_toan", prompt: "8 x 9 = ?", data: { n1: 8, n2: 9, symbol: "x" }, answer: 72, hint: "Tám lần chín." }]
  },
  {
    id: 12, topic: "Bảng nhân, bảng chia", title: "Bài 12: Bảng nhân 9, bảng chia 9", icon: "9️⃣", raw_html: "Học bảng 9.",
    activities: [{ id: "l12-a1", type: "tinh_toan", prompt: "81 : 9 = ?", data: { n1: 81, n2: 9, symbol: ":" }, answer: 9, hint: "9 x 9 = 81." }]
  },
  {
    id: 13, topic: "Bảng nhân, bảng chia", title: "Bài 13: Tìm số chia, bị chia", icon: "➗", raw_html: "Tìm thành phần trong phép chia.",
    activities: [{ id: "l13-a1", type: "tinh_toan", prompt: "Tìm x: 30 : x = 5", data: { display: "30 : x = 5" }, answer: 6, hint: "Số chia = Số bị chia : Thương." }]
  },
  {
    id: 14, topic: "Bảng nhân, bảng chia", title: "Bài 14: Một phần mấy", icon: "🍰", raw_html: "Khái niệm 1/2, 1/3, 1/4...",
    activities: [{ id: "l14-a1", type: "toan_loi_van", prompt: "Chia 10 quả cam làm 2 phần. Một phần gọi là một phần mấy?", data: {}, answer: "1/2", hint: "Số phần là 2." }]
  },
  // CHỦ ĐỀ 3: HÌNH PHẲNG, HÌNH KHỐI
  {
    id: 15, topic: "Làm quen hình phẳng, hình khối", title: "Bài 15: Hình tam giác, tứ giác, chữ nhật, vuông", icon: "📐", raw_html: "Nhận biết các hình.",
    activities: [{ id: "l15-a1", type: "hinh_hoc_truc_quan", prompt: "Hình chữ nhật có mấy cạnh dài bằng nhau?", data: { shape: "rectangle" }, answer: 2, hint: "Có 2 cạnh dài và 2 cạnh ngắn." }]
  },
  {
    id: 16, topic: "Làm quen hình phẳng, hình khối", title: "Bài 16: Điểm ở giữa, trung điểm", icon: "📍", raw_html: "Xác định trung điểm.",
    activities: [{ id: "l16-a1", type: "tinh_toan", prompt: "Đoạn AB dài 12cm, M là trung điểm AB. AM = ... cm?", data: {}, answer: 6, hint: "Chia đôi 12." }]
  },
  {
    id: 17, topic: "Làm quen hình phẳng, hình khối", title: "Bài 17: Hình tròn. Tâm, bán kính, đường kính", icon: "⭕", raw_html: "Đường kính gấp đôi bán kính.",
    activities: [{ id: "l17-a1", type: "tinh_toan", prompt: "Bán kính là 4cm, đường kính là mấy cm?", data: {}, answer: 8, hint: "4 x 2 = ?" }]
  },
  {
    id: 18, topic: "Làm quen hình phẳng, hình khối", title: "Bài 18: Góc vuông, góc không vuông", icon: "📏", raw_html: "Góc vuông có 90 độ.",
    activities: [{ id: "l18-a1", type: "hinh_hoc_truc_quan", prompt: "Một hình vuông có mấy góc vuông?", data: { shape: "square" }, answer: 4, hint: "Đếm tất cả các góc." }]
  },
  // CHỦ ĐỀ 4: PHÉP NHÂN, CHIA TRONG PHẠM VI 100
  {
    id: 19, topic: "Phép nhân, phép chia (Phạm vi 100)", title: "Bài 19: Nhân số có 2 chữ số với số có 1 chữ số", icon: "✖️", raw_html: "Nhân không nhớ và có nhớ.",
    activities: [{ id: "l19-a1", type: "tinh_toan", prompt: "12 x 3 = ?", data: { n1: 12, n2: 3, symbol: "x" }, answer: 36, hint: "3x2=6, 3x1=3." }]
  },
  {
    id: 20, topic: "Phép nhân, phép chia (Phạm vi 100)", title: "Bài 20: Chia số có 2 chữ số cho số có 1 chữ số", icon: "➗", raw_html: "Chia không dư.",
    activities: [{ id: "l20-a1", type: "tinh_toan", prompt: "48 : 4 = ?", data: { n1: 48, n2: 4, symbol: ":" }, answer: 12, hint: "4:4=1, 8:4=2." }]
  },
  {
    id: 21, topic: "Phép nhân, phép chia (Phạm vi 100)", title: "Bài 21: Gấp một số lên nhiều lần", icon: "📈", raw_html: "Muốn gấp một số lên nhiều lần ta lấy số đó nhân với số lần.",
    activities: [{ id: "l21-a1", type: "toan_loi_van", prompt: "Gấp 6 lên 5 lần được mấy?", data: {}, answer: 30, hint: "6 x 5 = ?" }]
  },
  {
    id: 22, topic: "Phép nhân, phép chia (Phạm vi 100)", title: "Bài 22: Giảm một số đi nhiều lần", icon: "📉", raw_html: "Muốn giảm một số đi nhiều lần ta lấy số đó chia cho số lần.",
    activities: [{ id: "l22-a1", type: "toan_loi_van", prompt: "Giảm 36 đi 6 lần được mấy?", data: {}, answer: 6, hint: "36 : 6 = ?" }]
  },
  {
    id: 23, topic: "Phép nhân, phép chia (Phạm vi 100)", title: "Bài 23: Tìm thành phần chưa biết (Nhân, Chia)", icon: "❓", raw_html: "Tìm x.",
    activities: [{ id: "l23-a1", type: "tinh_toan", prompt: "Tìm x: x * 7 = 49", data: { display: "x * 7 = 49" }, answer: 7, hint: "49 : 7 = ?" }]
  },
  {
    id: 24, topic: "Phép nhân, phép chia (Phạm vi 100)", title: "Bài 24: So sánh số lớn gấp mấy lần số bé", icon: "⚖️", raw_html: "Lấy số lớn chia số bé.",
    activities: [{ id: "l24-a1", type: "toan_loi_van", prompt: "Số lớn là 20, số bé là 4. Số lớn gấp mấy lần số bé?", data: {}, answer: 5, hint: "20 : 4 = ?" }]
  },
  {
    id: 25, topic: "Phép nhân, phép chia (Phạm vi 100)", title: "Bài 25: Phép chia hết, phép chia có dư", icon: "🍎", raw_html: "Số dư phải bé hơn số chia.",
    activities: [{ id: "l25-a1", type: "tinh_toan", prompt: "13 : 3 dư mấy?", data: {}, answer: 1, hint: "3 x 4 = 12." }]
  },
  {
    id: 26, topic: "Phép nhân, phép chia (Phạm vi 100)", title: "Bài 26: Chia số có 2 chữ số (có nhớ)", icon: "➗", raw_html: "Thực hiện phép chia cẩn thận.",
    activities: [{ id: "l26-a1", type: "tinh_toan", prompt: "75 : 5 = ?", data: { n1: 75, n2: 5, symbol: ":" }, answer: 15, hint: "7:5 được 1 dư 2, hạ 5 được 25." }]
  },
  {
    id: 27, topic: "Phép nhân, phép chia (Phạm vi 100)", title: "Bài 27: Giảm một số đi một số lần (Tiếp)", icon: "📉", raw_html: "Luyện tập giảm giá trị.",
    activities: [{ id: "l27-a1", type: "toan_loi_van", prompt: "Có 50kg gạo, giảm đi 5 lần còn mấy kg?", data: {}, answer: 10, hint: "50 : 5 = ?" }]
  },
  {
    id: 28, topic: "Phép nhân, phép chia (Phạm vi 100)", title: "Bài 28: Giải toán bằng 2 bước tính", icon: "🪜", raw_html: "Phân tích bài toán.",
    activities: [{ id: "l28-a1", type: "toan_loi_van", prompt: "Hộp 1 có 10 kẹo, hộp 2 gấp đôi hộp 1. Cả hai có mấy kẹo?", data: {}, answer: 30, hint: "10 + (10x2) = ?" }]
  },
  {
    id: 29, topic: "Phép nhân, phép chia (Phạm vi 100)", title: "Bài 29: Luyện tập chung", icon: "🏁", raw_html: "Ôn tập tổng hợp.",
    activities: [{ id: "l29-a1", type: "tinh_toan", prompt: "25 x 3 = ?", data: { n1: 25, n2: 3, symbol: "x" }, answer: 75, hint: "3x5=15, 3x2=6 nhớ 1." }]
  },
  {
    id: 30, topic: "Phép nhân, phép chia (Phạm vi 100)", title: "Bài 30: Chữ số La Mã", icon: "🏛️", raw_html: "I, V, X.",
    activities: [{ id: "l30-a1", type: "tinh_toan", prompt: "Số 9 viết La Mã là gì?", data: {}, answer: "IX", hint: "10 trừ 1." }]
  },
  // CHỦ ĐỀ 5: ĐỘ DÀI, KHỐI LƯỢNG, DUNG TÍCH, NHIỆT ĐỘ
  {
    id: 31, topic: "Độ dài, khối lượng, dung tích, nhiệt độ", title: "Bài 31: Milimét", icon: "📏", raw_html: "1cm = 10mm.",
    activities: [{ id: "l31-a1", type: "tinh_toan", prompt: "8cm = ... mm?", data: {}, answer: 80, hint: "8 x 10." }]
  },
  {
    id: 32, topic: "Độ dài, khối lượng, dung tích, nhiệt độ", title: "Bài 32: Gam", icon: "⚖️", raw_html: "1kg = 1000g.",
    activities: [{ id: "l32-a1", type: "tinh_toan", prompt: "2kg = ... g?", data: {}, answer: 2000, hint: "2 x 1000." }]
  },
  {
    id: 33, topic: "Độ dài, khối lượng, dung tích, nhiệt độ", title: "Bài 33: Mililít", icon: "🧪", raw_html: "1l = 1000ml.",
    activities: [{ id: "l33-a1", type: "tinh_toan", prompt: "500ml + 500ml = ... l?", data: {}, answer: 1, hint: "1000ml = 1l." }]
  },
  {
    id: 34, topic: "Độ dài, khối lượng, dung tích, nhiệt độ", title: "Bài 34: Nhiệt độ", icon: "🌡️", raw_html: "Nhiệt độ sôi của nước là 100 độ C.",
    activities: [{ id: "l34-a1", type: "hinh_hoc_truc_quan", prompt: "Nhiệt độ nước đá đang tan là bao nhiêu độ C?", data: { item: "ice" }, answer: 0, hint: "Độ C thấp nhất khi đóng băng." }]
  },
  {
    id: 35, topic: "Độ dài, khối lượng, dung tích, nhiệt độ", title: "Bài 35: Xem đồng hồ", icon: "🕒", raw_html: "Kim dài chỉ phút.",
    activities: [{ id: "l35-a1", type: "hinh_hoc_truc_quan", prompt: "Kim phút chỉ số 9 là bao nhiêu phút?", data: {}, answer: 45, hint: "9 x 5 = ?" }]
  },
  {
    id: 36, topic: "Độ dài, khối lượng, dung tích, nhiệt độ", title: "Bài 36: Tháng, năm", icon: "📅", raw_html: "Một năm có 12 tháng.",
    activities: [{ id: "l36-a1", type: "toan_loi_van", prompt: "Tháng 2 thường có bao nhiêu ngày?", data: {}, answer: 28, hint: "Có thể là 28 hoặc 29." }]
  },
  {
    id: 37, topic: "Độ dài, khối lượng, dung tích, nhiệt độ", title: "Bài 37: Tiền Việt Nam", icon: "💸", raw_html: "Nhận biết các mệnh giá tiền.",
    activities: [{ id: "l37-a1", type: "tinh_toan", prompt: "2 tờ 5000đ là bao nhiêu tiền?", data: {}, answer: 10000, hint: "5000 + 5000." }]
  },
  {
    id: 38, topic: "Độ dài, khối lượng, dung tích, nhiệt độ", title: "Bài 38: Luyện tập chung", icon: "🌟", raw_html: "Ôn tập đo lường.",
    activities: [{ id: "l38-a1", type: "tinh_toan", prompt: "1kg - 400g = ... g?", data: {}, answer: 600, hint: "1000 - 400." }]
  },
  // CHỦ ĐỀ 6: ÔN TẬP HỌC KÌ I
  {
    id: 39, topic: "Ôn tập học kì I", title: "Bài 39: Ôn tập số học", icon: "✍️", raw_html: "Ôn tập các số có 3 chữ số.",
    activities: [{ id: "l39-a1", type: "tinh_toan", prompt: "Số bé nhất có 3 chữ số là:", data: {}, answer: 100, hint: "Số bắt đầu hàng trăm là 1." }]
  },
  {
    id: 40, topic: "Ôn tập học kì I", title: "Bài 40: Ôn tập bảng nhân chia", icon: "✖️", raw_html: "Kiểm tra phản xạ nhanh.",
    activities: [{ id: "l40-a1", type: "tinh_toan", prompt: "8 x 7 = ?", data: {}, answer: 56, hint: "Tám lần bảy." }]
  },
  {
    id: 41, topic: "Ôn tập học kì I", title: "Bài 41: Ôn tập hình học", icon: "📐", raw_html: "Góc và hình khối.",
    activities: [{ id: "l41-a1", type: "hinh_hoc_truc_quan", prompt: "Hình tam giác có mấy cạnh?", data: { shape: "triangle" }, answer: 3, hint: "Tam nghĩa là ba." }]
  },
  {
    id: 42, topic: "Ôn tập học kì I", title: "Bài 42: Ôn tập đo lường", icon: "⚖️", raw_html: "Ôn lại các đơn vị.",
    activities: [{ id: "l42-a1", type: "tinh_toan", prompt: "3l = ... ml?", data: {}, answer: 3000, hint: "3 x 1000." }]
  },
  {
    id: 43, topic: "Ôn tập học kì I", title: "Bài 43: Ôn tập giải toán", icon: "📝", raw_html: "Toán có lời văn.",
    activities: [{ id: "l43-a1", type: "toan_loi_van", prompt: "Có 40 học sinh chia đều 5 hàng. Mỗi hàng mấy bạn?", data: {}, answer: 8, hint: "40 : 5 = ?" }]
  },
  {
    id: 44, topic: "Ôn tập học kì I", title: "Bài 44: Ôn tập chung", icon: "🏆", raw_html: "Hoàn thành học kì I.",
    activities: [{ id: "l44-a1", type: "tinh_toan", prompt: "60 + 40 : 2 = ?", data: {}, answer: 80, hint: "Chia trước, cộng sau." }]
  }
];