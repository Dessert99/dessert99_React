import { useState } from 'react';
import { Calendar } from './ui/calendar';
import { type DateRange } from 'react-day-picker';

const Shadcn_Calendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 6, 15),
  });

  return (
    <div>
      <div>
        <div>기본 캘린더</div>
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          className='rounded-md border [--cell-size:--spacing(5)] md:[--cell-size:--spacing(10)]'
          captionLayout='dropdown'
          buttonVariant='destructive' // < > 버튼
        />
      </div>
      <div>
        <div>범위 지정하기</div>
        <Calendar
          mode='range'
          defaultMonth={dateRange?.from}
          selected={dateRange}
          onSelect={setDateRange}
          numberOfMonths={1} // 화면에 보이는 달력 개수
          className='rounded-lg border shadow-sm [--cell-size:--spacing(10)]'
        />
      </div>
    </div>
  );
};

export default Shadcn_Calendar;
