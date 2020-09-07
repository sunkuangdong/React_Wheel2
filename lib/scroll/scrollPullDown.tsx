import React, {TouchEventHandler} from 'react';
import {HTMLAttributes, MouseEventHandler, UIEventHandler, useEffect, useRef, useState} from 'react';
import classes from '../helpers/classes';
import './scroll.scss';
import scrollbarWidth from './scroll_whith';

interface Props extends HTMLAttributes<HTMLDivElement> {
  onPull?: () => void
}

// 查看是否是触屏设备
// const isTouchDevice = 'ontouchstart' in document.documentElement;


const Scroll: React.FunctionComponent<Props> = (props) => {
  const {children, ...rest} = props;
  const [barHeight, setBarHeight] = useState(0);
  const [barTop, _setBarTop] = useState(0);
  // 是否显示滚动条(根据是否是移动设备)
  const [barVisable, setBarVisable] = useState(false);

  const setBarTop = (number: number) => {
    if (number < 0) {return;}
    const {current} = contanerRef;
    const scrollHeight = current!.scrollHeight;
    const viewHeight = current!.getBoundingClientRect().height;
    const maxBarTop = (scrollHeight - viewHeight) * viewHeight / scrollHeight;
    if (number > maxBarTop) {return;}
    _setBarTop(number);

  };

  let timeIdRef = useRef<number | null>(null);
  const onscroll: UIEventHandler = (e) => {
    setBarVisable(true);
    const {current} = contanerRef;
    const scrollHeight = current!.scrollHeight;
    const viewHeight = current!.getBoundingClientRect().height;
    const scrollTop = current!.scrollTop;
    _setBarTop(scrollTop * viewHeight / scrollHeight);
    if (timeIdRef.current !== null) {
      clearTimeout(timeIdRef.current);
    }
    timeIdRef.current = window.setTimeout(() => {
      setBarVisable(false);
    }, 300);
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

  // 下拉刷新
  const [translateY, _setTranslateY] = useState(0);
  const setTranslateY = (y: number) => {
    if (y < 0) {return;} else if (y > 150) {y = 150;}
    _setTranslateY(y);
  };
  const lastYRef = useRef(0);
  const moveCount = useRef(0);
  const pulling = useRef(false);
  const onTouchStart: TouchEventHandler = (e) => {
    const scrollTop = contanerRef.current!.scrollTop;
    if (scrollTop !== 0) {return;}
    pulling.current = true;
    lastYRef.current = e.touches[0].clientY;
    moveCount.current = 0;
  };
  const onTouchMove: TouchEventHandler = (e) => {
    moveCount.current += 1;
    const deltaY = e.touches[0].clientY - lastYRef.current;
    // 第一次
    if (moveCount.current === 1 && deltaY < 0) {
      //  不是下拉
      pulling.current = false;
      return;
    }
    // 第二次
    if (!pulling.current) {return;}
    setTranslateY(translateY + deltaY);
    lastYRef.current = e.touches[0].clientY;
  };
  const onTouchEnd: TouchEventHandler = () => {
    if (pulling.current === true) {
      setTranslateY(0);
      props.onPull && props.onPull();
      pulling.current = false;
    }
  };
  return (
    <div {...rest} className={classes('sun-scroll')}>
      <div className={classes('sun-scroll-inner')}
           style={{right: -scrollbarWidth(), transform: `translateY(${translateY}px)`}}
           ref={contanerRef}
           onScroll={onscroll}
           onTouchMove={onTouchMove}
           onTouchStart={onTouchStart}
           onTouchEnd={onTouchEnd}>
        {children}
      </div>
      {barVisable &&
      <div className={classes('sun-scroll-track')}>
        <div className={classes('sun-scroll-bar')}
             style={{height: barHeight, transform: `translateY(${barTop}px)`}}
             onMouseDown={onMouseDownBar}
        />
      </div>
      }
      <div className={classes('sun-scroll-pulling')} style={{height: translateY}}>
        {translateY === 150 ?
          <span className="sun-scroll-text">ok</span> :
          <span className="sun-scroll-icon">↓</span>}
      </div>
    </div>
  );
};
export default Scroll;