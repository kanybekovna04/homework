import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(null);
  const [targetDate, setTargetDate] = useState(null);

  const startCountdown = (year, month, day, hour, minute) => {
    const targetDateTime = new Date(year, month - 1, day, hour, minute);
    setTargetDate(targetDateTime);

    const timer = setInterval(() => {
      const now = new Date();
      const timeDifference = targetDateTime - now;

      if (timeDifference <= 0) {
        clearInterval(timer);
        setCountdown("Указанная дата и время уже прошли.");
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);

        setCountdown(`${days}день ${hours}час ${minutes}мин ${seconds}сек`);
      }
    }, 1000);
  };

  const getMonthName = (month) => {
    const months = [
      "январь",
      "февраль",
      "март",
      "апрель",
      "май",
      "июнь",
      "июль",
      "август",
      "сентябрь",
      "октябрь",
      "ноябрь",
      "декабрь",
    ];
    return months[month - 1];
  };

  return (
    <div>
      <h2>Часы обратного отсчета</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const year = e.target.elements.year.value;
          const month = e.target.elements.month.value;
          const day = e.target.elements.day.value;
          const hour = e.target.elements.hour.value;
          const minute = e.target.elements.minute.value;
          startCountdown(year, month, day, hour, minute);
        }}
      >
        <input type="number" name="year" placeholder="Год" required />
        <select name="month" required>
          <option value="1">январь</option>
          <option value="2">февраль</option>
          <option value="3">март</option>
          <option value="4">апрель</option>
          <option value="5">май</option>
          <option value="6">июнь</option>
          <option value="7">июль</option>
          <option value="8">август</option>
          <option value="9">сентябрь</option>
          <option value="10">октябрь</option>
          <option value="11">ноябрь</option>
          <option value="12">декабрь</option>
        </select>
        <input type="number" name="day" placeholder="День" required />
        <input type="number" name="hour" placeholder="Час" required />
        <input type="number" name="minute" placeholder="Минута" required />
        <button type="submit">Начать обратный отсчет</button>
      </form>
      {countdown && <h3>{countdown}</h3>}
    </div>
  );
};

export default CountdownTimer;
