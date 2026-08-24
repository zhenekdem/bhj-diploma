/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    if (!element) {
      throw new Error('Элемент не передан в конструктор класса TransactionsWidget');
    }
    this.element = element;
    this.registerEvents();
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    const createIncomeBtn = this.element.querySelector('.create-income-button');
    if (createIncomeBtn) {
      createIncomeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        App.getModal('newIncome').open();
      });
    }

    const createExpenseBtn = this.element.querySelector('.create-expense-button');
    if (createExpenseBtn) {
      createExpenseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        App.getModal('newExpense').open();
      });
    }
  }
}
