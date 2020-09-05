import * as React from 'react';
import {HTMLAttributes, MouseEventHandler, UIEventHandler, useEffect, useRef, useState} from 'react';
import classes from '../helpers/classes';
import './scroll.scss';
import scrollbarWidth from './scroll_whith';

interface Props extends HTMLAttributes<HTMLDivElement> {
}

const Scroll: React.FunctionComponent<Props> = (props) => {
  const {children, ...rest} = props;
  const [barHeight, setBarHeight] = useState(0);
  const [barTop, _setBarTop] = useState(0);
  const setBarTop = (number: number) => {
    if (number < 0) {return;}
    const {current} = contanerRef;
    const scrollHeight = current!.scrollHeight;
    const viewHeight = current!.getBoundingClientRect().height;
    const maxBarTop = (scrollHeight - viewHeight) * viewHeight / scrollHeight;
    if (number > maxBarTop) {return;}
    _setBarTop(number);

  };
  const onscroll: UIEventHandler = (e) => {
    const {current} = contanerRef;
    const scrollHeight = current!.scrollHeight;
    const viewHeight = current!.getBoundingClientRect().height;
    const scrollTop = current!.scrollTop;
    _setBarTop(scrollTop * viewHeight / scrollHeight);
  };

  // 鼠标移动滚动条
  let draggingRef = useRef(false);
  let firstYRef = useRef(0);
  let firstBarTopRef = useRef(0);
  const onMouseDownBar: MouseEventHandler = (e) => {
    draggingRef.current = true;
    firstYRef.current = e.clientY;
  };
  const onMouseMoveBar = (e: MouseEvent) => {
    if (draggingRef.current) {
      const delta = e.clientY - firstYRef.current;
      const newBarTop = firstBarTopRef.current + delta;
      setBarTop(newBarTop);
      const scrollHeight = contanerRef.current!.scrollHeight;
      const viewHeight = contanerRef.current!.getBoundingClientRect().height;
      contanerRef.current!.scrollTop = newBarTop * scrollHeight / viewHeight;
    }
  };
  const onMouseUpBar = (e: MouseEvent) => {
    draggingRef.current = false;
  };
  const onSelect = (e: Event) => {
    if (draggingRef.current) {e.preventDefault();}
  };

  // useRef 获取DOM元素
  const contanerRef = useRef<HTMLDivElement>(null);
  // 页面渲染之后Hocks API，如果第二个参数是[]，相当于之前的mounted生命周期
  useEffect(() => {
    const scrollHeight = contanerRef.current!.scrollHeight;
    const viewHeight = contanerRef.current!.getBoundingClientRect().height;
    setBarHeight(viewHeight * viewHeight / scrollHeight);
  }, []);
  useEffect(() => {
    document.addEventListener('mouseup', onMouseUpBar);
    document.addEventListener('mousemove', onMouseMoveBar);
    document.addEventListener('selectstart', onSelect);
    return () => {
      document.removeEventListener('mouseup', onMouseUpBar);
      document.removeEventListener('mousemove', onMouseMoveBar);
      document.removeEventListener('selectstart', onSelect);
    };
  }, []);
  return (
    <div {...rest} className={classes('sun-scroll')}>
      <div className={classes('sun-scroll-inner')} style={{right: -scrollbarWidth()}}
           onScroll={onscroll} ref={contanerRef}>
        {children}
      </div>
      <div className={classes('sun-scroll-track')}>
        <div className={classes('sun-scroll-bar')}
             style={{height: barHeight, transform: `translateY(${barTop}px)`}}
             onMouseDown={onMouseDownBar}
        />
      </div>
    </div>
  );
};
export default Scroll;