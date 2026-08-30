import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

wb = openpyxl.Workbook()
ws = wb.active
ws.title = 'WAT 2027 Jobs Masterlist'
ws.views.sheetView[0].showGridLines = True

# Style definitions
header_fill = PatternFill(start_color='0F172A', end_color='0F172A', fill_type='solid')
header_font = Font(name='Segoe UI', size=11, bold=True, color='FFFFFF')
regular_font = Font(name='Segoe UI', size=10)
bold_font = Font(name='Segoe UI', size=10, bold=True)
zebra_fill = PatternFill(start_color='F8FAFC', end_color='F8FAFC', fill_type='solid')
thin_border = Border(
    left=Side(style='thin', color='CBD5E1'),
    right=Side(style='thin', color='CBD5E1'),
    top=Side(style='thin', color='CBD5E1'),
    bottom=Side(style='thin', color='CBD5E1')
)

headers = [
    'ชื่องาน / สถานที่ทำงาน (Employer)',
    'รัฐ (State)',
    'Agency ที่ถือสัญญา',
    'ตำแหน่ง (Position / Role)',
    'ค่าแรงฐาน / OT ($/ชม.)',
    'ทิป (Tips / Bonus)',
    'ชั่วโมงทำงานจริง (คิดเผื่อหัว-ท้ายซีซัน)',
    'ค่าที่พัก ($/สัปดาห์)',
    'สวัสดิการ (อาหาร ฟรี หรือ อื่นๆ)'
]

rows = [
    [
        'Denali Princess Wilderness Lodge',
        'Alaska (AK)',
        'Acadex, OEG, IEE, Higher',
        'Housekeeping / Room Attendant',
        'ฐาน $16.00 / OT $24.00',
        'ทิปหัวเตียง ~$15 - $30 / สัปดาห์',
        '50 – 54 ชม./สัปดาห์ (พีค 58-62 ชม. / หัวท้าย 35-42 ชม.)',
        '$105 / สัปดาห์',
        'อาหารบุฟเฟต์ 3 มื้อฟรีใน EDR ตักไม่อั้น 7 วัน, รถรับส่งพนักงาน, ส่วนลดทัวร์/รถไฟ 50%'
    ],
    [
        'Denali Princess Wilderness Lodge',
        'Alaska (AK)',
        'Acadex, OEG, IEE, Higher',
        'Motor Coach / Fleet Detailer (ล้างรถทัวร์กะดึก)',
        'ฐาน $16.00 / OT $24.00',
        'ไม่มี ($0)',
        '52 – 56 ชม./สัปดาห์ (กะดึก 21:00-02:00 OT ดกมาก)',
        '$105 / สัปดาห์',
        'อาหารบุฟเฟต์ 3 มื้อฟรีใน EDR, กลางวันว่างนอนพักผ่อนหรือเดินป่าได้ทั้งวัน'
    ],
    [
        'Denali Princess Wilderness Lodge',
        'Alaska (AK)',
        'Acadex, OEG, IEE, Higher',
        'Kitchen Stewarding / Dishwasher (ล้างจาน)',
        'ฐาน $16.00 / OT $24.00',
        'ไม่มี (ได้กินอาหารในครัวฟรี)',
        '50 – 55 ชม./สัปดาห์ (ควงกะค่ำได้ง่าย)',
        '$105 / สัปดาห์',
        'อาหารบุฟเฟต์ 3 มื้อใน EDR + เชฟทำสเต๊ก/เบอร์เกอร์เลี้ยงในครัวฟรีทุกกะ'
    ],
    [
        'Denali Princess Wilderness Lodge',
        'Alaska (AK)',
        'Acadex, OEG, IEE, Higher',
        'Luggage Handler (พนักงานยกกระเป๋าทัวร์)',
        'ฐาน $15.50 / OT $23.25',
        '💵 ทิปสดจากทัวร์ ~$40 - $70 / สัปดาห์',
        '46 – 52 ชม./สัปดาห์',
        '$105 / สัปดาห์',
        'อาหารบุฟเฟต์ 3 มื้อฟรีใน EDR, ได้ทิปเงินสดจากกรุ๊ปทัวร์ผู้สูงอายุ'
    ],
    [
        'Denali Bluffs Hotel',
        'Alaska (AK)',
        'Acadex Thailand',
        'Housekeeping / Laundry',
        'ฐาน $15.00 / OT $22.50',
        '🎁 โบนัส +$1.00/ชม. ท้ายทริป (ครบสัญญา)',
        '40 – 45 ชม./สัปดาห์ (หัวท้าย 32-38 ชม.)',
        '$140 / สัปดาห์',
        'รถชัตเติลบัสขึ้น-ลงเขา Sugarloaf, ส่วนลดอาหารร้าน The Perk, วิวหุบเขาสวย'
    ],
    [
        'Grande Denali Lodge',
        'Alaska (AK)',
        'Acadex Thailand',
        'Housekeeping / Public Area Cleaner',
        'ฐาน $15.50 / OT $23.25',
        '🎁 โบนัส +$1.00/ชม. ท้ายทริป (ครบสัญญา)',
        '42 – 46 ชม./สัปดาห์ (หัวท้าย 35-40 ชม.)',
        '$140 / สัปดาห์',
        'โรงแรมหรู 4 ดาวบนยอดเขา, รถชัตเติลบัสรับส่ง, ส่วนลดอาหารห้องอาหาร Alpenglow'
    ],
    [
        'Grande Denali Lodge',
        'Alaska (AK)',
        'Acadex Thailand',
        'Busser / Food Runner (Alpenglow Restaurant)',
        'ฐาน $14.00 / OT $21.00',
        '💵 Tip Out สด ~$40 - $70 / คืน',
        '40 – 45 ชม./สัปดาห์',
        '$140 / สัปดาห์',
        'โบนัส +$1.00/ชม. ท้ายทริป, ได้ทิปเงินสดจากแขกไฮเอนด์ร้านอาหารวิวพาโนรามา'
    ],
    [
        'Mt. McKinley Princess Lodge',
        'Alaska (AK)',
        'Higher, OEG, Acadex',
        'Housekeeping / Kitchen / Laundry',
        'ฐาน $16.00 / OT $24.00',
        'ทิปหัวเตียง ~$10 - $20 / สัปดาห์',
        '44 – 48 ชม./สัปดาห์ (หัวท้าย 35-40 ชม.)',
        '$105 / สัปดาห์',
        'อาหารบุฟเฟต์ 3 มื้อฟรีใน EDR, ชมวิวยอดเขาเดนาลี บรรยากาศสงบ ไม่กดดัน'
    ],
    [
        'Fairbanks Princess Riverside Lodge',
        'Alaska (AK)',
        'IEE, Acadex, Higher',
        'Food Runner / Laundry / Steward',
        'ฐาน $15.50 / OT $23.25',
        'ทิปเฉพาะ F&B ~$20 - $40 / สัปดาห์',
        '36 – 40 ชม./สัปดาห์ (ไม่ค่อยมี OT)',
        '$105 / สัปดาห์',
        'หอพักในเมืองแฟร์แบงก์ส + รถชัตเติลบัส, ใกล้ Walmart และร้านอาหารไทย หางาน 2 ง่าย'
    ],
    [
        'Grand Teton Lodge Company (GTLC)',
        'Wyoming (WY)',
        'Acadex, Higher, OEG, IEE',
        'Housekeeping / Crew Member',
        'ฐาน $17.75 / OT $26.62',
        'ไม่มี (เน้นค่าแรงฐานสูงสุด)',
        '54 – 60 ชม./สัปดาห์ (พีค 60-64 ชม. / หัวท้าย 40 ชม.)',
        '$0 (หอพักฟรี!) + ค่าอาหาร EDR $105/wk',
        'หอพักฟรี 100%, อาหารบุฟเฟต์ 3 มื้อ EDR, ส่วนลดซื้อของ 40%, เข้าอุทยาน Grand Teton & Yellowstone ฟรี'
    ],
    [
        'Grand Teton Lodge Company (GTLC)',
        'Wyoming (WY)',
        'Acadex, Higher, OEG, IEE',
        'Kitchen Crew / Dishwasher / Food Prep',
        'ฐาน $17.75 / OT $26.62',
        'ไม่มี (กินฟรีในครัว)',
        '52 – 58 ชม./สัปดาห์ (ควงกะ Banquet ได้)',
        '$0 (หอพักฟรี!) + ค่าอาหาร EDR $105/wk',
        'หอพักฟรี 100%, อาหาร 3 มื้อ EDR + กินฟรีในครัว, สิทธิประโยชน์เครือ Vail Resorts'
    ],
    [
        'Xanterra Yellowstone Lodges',
        'Wyoming/MT',
        'OEG, IEE Thailand',
        'Hospitality Crew / Kitchen / Steward',
        'ฐาน $15.70 / OT $23.55',
        'ไม่มี ($0)',
        '46 – 52 ชม./สัปดาห์ (หัวท้าย 38-42 ชม.)',
        '$120 / สัปดาห์ (รวมหอพัก+อาหาร 3 มื้อ)',
        'หอพักใหม่ Arnica Development + บุฟเฟต์ 3 มื้อ EDR, เที่ยวบ่อน้ำพุร้อนและไกเซอร์ฟรี'
    ],
    [
        'Under Canvas Grand Teton / Yellowstone',
        'Wyoming (WY)',
        'Higher Education',
        'Housekeeping / Guest Service',
        'ฐาน $16.50 / OT $24.75',
        '💵 ทิปสด ~$50 - $100 / สัปดาห์',
        '42 – 46 ชม./สัปดาห์',
        '$100 / สัปดาห์',
        'แคมป์กระโจมซาฟารีหรู, อาหารพนักงาน, แขกไฮเอนด์ ทิปเงินสดดี บรรยากาศเป็นกันเอง'
    ],
    [
        'Kalahari Resorts & Conventions',
        'Wisconsin (WI)',
        'OEG, Acadex, Higher',
        'Lifeguard / Housekeeping (งานหลัก)',
        'ฐาน $15.00 / OT $22.50',
        'ไม่มี ($0)',
        '38 – 44 ชม./สัปดาห์ (เกลี่ยกะ 40 ชม.)',
        '$105 / สัปดาห์',
        'หอพัก Kalahari Village, บัตรเล่นสวนน้ำฟรี, เมืองปั่นจักรยาน 100%, หางาน 2 ร้านอาหารง่าย'
    ],
    [
        'Wisconsin Dells Riverfront Eateries',
        'Wisconsin (WI)',
        'Walk-in สมัครเองหน้างาน',
        'Barback / Busser / Runner (งานที่สอง)',
        'ฐาน $12.00 – $14.00',
        '💵 ทิปสด $50 - $100 / คืน',
        '20 – 25 ชม./สัปดาห์ (กะค่ำ 17:30-23:00)',
        'ทำควบกับงานหลัก',
        'รับทิปเงินสดทุกคืน ยัดกระเป๋ากลับห้องทันที, อาหารพนักงานในกะ'
    ],
    [
        'Dollywood Theme Park & Resorts',
        'Tennessee (TN)',
        'New Step, Acadex',
        'Ride Operator / Food Service / Retail',
        'ฐาน $15.00 / OT $22.50',
        'ไม่มี (ปลอดภาษีรัฐ 0%)',
        '44 – 50 ชม./สัปดาห์ (หัวท้าย 35-40 ชม.)',
        '$110 / สัปดาห์',
        'นั่งรถราง Pigeon Forge Trolley $1-$2.50/วัน, บัตรเข้าสวนสนุก Dollywood & Splash Country ฟรี'
    ],
    [
        'Premier Aquatics / High Sierra Pools',
        'Maryland/VA',
        'Acadex, New Step, ALC',
        'Pool Lifeguard',
        'ฐาน $16.00 / OT $24.00',
        'ไม่มี (เน้นการันตี OT)',
        '50 – 54 ชม./สัปดาห์ (การันตี OT 10-14 ชม.)',
        '$120 / สัปดาห์',
        'การันตีชั่วโมง OT สม่ำเสมอ ไม่ผันผวนตามนักท่องเที่ยว, อพาร์ตเมนต์แชร์กับเพื่อน'
    ],
    [
        'Cedar Point Amusement Park',
        'Ohio (OH)',
        'OEG, IEE Thailand',
        'Ride Operator / Food Service',
        'ฐาน $14.50 / OT $21.75',
        'ไม่มี ($0)',
        '46 – 52 ชม./สัปดาห์ (หัวท้าย 38-42 ชม.)',
        '$80 / สัปดาห์',
        'หอพักราคาถูกมาก ($80/wk), รถบัสรับส่งฟรี, บัตรเล่นเครื่องเล่นสวนสนุกระดับโลกฟรี'
    ]
]

ws.append(headers)
for r in rows:
    ws.append(r)

# Header style
for col_idx in range(1, len(headers) + 1):
    cell = ws.cell(row=1, column=col_idx)
    cell.fill = header_fill
    cell.font = header_font
    cell.alignment = Alignment(horizontal='center', vertical='center', wrap_text=True)

# Row styling
for row_idx, row in enumerate(ws.iter_rows(min_row=2, max_row=len(rows)+1, min_col=1, max_col=len(headers)), start=2):
    fill = zebra_fill if row_idx % 2 == 0 else PatternFill(fill_type=None)
    for col_idx, cell in enumerate(row, start=1):
        cell.font = regular_font
        cell.border = thin_border
        if fill.fill_type:
            cell.fill = fill
        if col_idx in [2, 5, 8]:
            cell.alignment = Alignment(horizontal='center', vertical='center')
        elif col_idx in [6, 7]:
            cell.alignment = Alignment(horizontal='left', vertical='center')
        else:
            cell.alignment = Alignment(horizontal='left', vertical='center')

# Column width auto-fit
for col in ws.columns:
    max_len = 0
    col_letter = get_column_letter(col[0].column)
    for cell in col:
        val_str = str(cell.value or '')
        length = len(val_str.encode('utf-8')) // 2 if any(ord(c) > 127 for c in val_str) else len(val_str)
        if length > max_len:
            max_len = length
    ws.column_dimensions[col_letter].width = max(max_len + 4, 15)

# Freeze top row
ws.freeze_panes = 'A2'

try:
    excel_path = r'C:\Users\ASUS\Desktop\WAT\Work_and_Travel_Master_Job_Database_2027.xlsx'
    wb.save(excel_path)
    print('Successfully updated original Excel file to:', excel_path)
except PermissionError:
    excel_path_fixed = r'C:\Users\ASUS\Desktop\WAT\Work_and_Travel_Master_Job_Database_2027_Fixed.xlsx'
    wb.save(excel_path_fixed)
    print('Original file is currently open in Excel. Successfully saved fixed version to:', excel_path_fixed)

