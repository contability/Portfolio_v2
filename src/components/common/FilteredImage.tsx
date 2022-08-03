import { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import filter from "../../assets/common/image_filter.jpg";

const FilteredImage = ( {targetImg} : any) => {
    
    const targetImgRef = useRef<any>();

    // const div = useCallback((node : any) => {
    //     if (node !== null) {
    //        console.log(node.getBoundingClientRect().height);
    //        console.log(node.getBoundingClientRect().width);
    //     }
    //   }, [window.innerWidth, window.innerHeight]);

    // useEffect(()=>{
    //     console.log(targetImgRef.current?.offsetHeight);
    // }, [targetImgRef]);
    return (
        <FilteredImageBox>
            <img src={filter} alt="" className="filter" />
            <img src={targetImg} alt="" className="target" ref={targetImgRef}/>
        </FilteredImageBox>
    );
};

const FilteredImageBox = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    .filter{
        position: absolute;
        z-index: 2;
        filter: opacity(0.5);
        width: 100%;
        height: 100%;
    }

    .target{
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
    }


`;

export default FilteredImage;