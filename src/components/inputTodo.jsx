export const InputTodo = (props) => {
  const {
    todoText,
    onChangeTodoText,
    onClickAdd,
    disabled,
    onPressEnter
  } = props;

  return (
    <>
      <div className="input-area">
        <input
          type="text"
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
          disabled={disabled}
          onKeyPress={onPressEnter}
        />
        <button onClick={onClickAdd} disabled={disabled}>
          追加
        </button>
      </div>
    </>
  );
};
