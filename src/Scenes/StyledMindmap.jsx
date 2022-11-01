import styled from 'styled-components'

export const StyledMindMap = styled.div `
position: absolute;
top: 0;
left: 0;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
    .mindmap {
        width: 1800px;
        padding: 0 25px;
        color: #000000a0;
    }
    .mindmap__info {
        position: relative;
        width: 100%;
        margin: 200px 0 20px 0;
    }
    .mindmap__title {
        font-family: 'proofBoldFont', sans-serif;
        font-weight: bold;
        font-size: 60px;
        text-transform: uppercase;
        margin-bottom: 20px;
        letter-spacing: -3px;
        span {
            color: #00000026;
        }
    }
    .mindmap__subtitle {
        max-width: 44%;
    }
    .mindmap__img {
        position: absolute;
        bottom: 0;
        right: 0px;
        max-width: 24rem;
    }
    .mindmap__table {
        position: relative;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        gap: 15px;
    }

    .mindmap__card {
        position: relative;
        background-color: #ebe7e0;
        padding: 1.5rem;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: end;
        background-repeat: no-repeat;
        background-position: bottom right;
        overflow: hidden;
        transition: 0.4s all;
        cursor: pointer;
        .mindmap__num {
            font-size: 3.75rem;
            line-height: 1;
            color: #d4d0ca;
        }
        .mindmap__card-name {
            color: #0c0c0b;
            letter-spacing: .025em;
            font-size: .875rem;
            line-height: 1.25rem;
        }
        .mindmap__card-arrow {
            transition: 0.3s ease-out;
            transform: scale(0);
            color: #0c0c0b;
            vertical-align: middle;
            margin-left: -15px;
        }
        &:hover .mindmap__card-arrow {
            transform: scale(1);
            margin-left: 0;
        }
        &:hover {
            .mindmap__card-img {
                filter: contrast(100%)
            }
        }
    }
    .mindmap__card-img {
        position: absolute;
        bottom: 0px;
        right: 0px;
        object-fit: cover;
        transition: 0.3s all;
        filter: contrast(10%)
    }
    .mindmap__card-vision {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
        .mindmap__card-img {
            width: 40%;
        } 
    }
    .mindmap__card-community {
        grid-column: 1 / 2;
        grid-row: 3 / 5;
        .mindmap__card-img {
            width: 50%;
        } 
    }
    .mindmap__card-metaverse {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
        .mindmap__card-img {
            width: 45%;
        } 
    }
    .mindmap__card-physical {
        grid-column: 2 / 3;
        grid-row: 2 / 5;
        .mindmap__card-img {
            width: 70%;
        } 
    }
    .mindmap__card-bridge {
        grid-column: 3 / 4;
        grid-row: 1 / 3;
        .mindmap__card-img {
            width: 60%;
        } 
    }
    .mindmap__card-seedlings {
        grid-column: 4 / 5;
        grid-row: 1 / 3;
        .mindmap__card-img {
            width: 60%;
        } 
    }
    .mindmap__card-connect {
        grid-column: 3 / 5;
        grid-row: 3 / 5;
        background-color: #c03540;
        color: #fff;
        .mindmap__card-arrow, .mindmap__card-name {
            color: #fff;
        }
        .mindmap__card-img {
            width: 20%;
        } 
    }
    @media only screen and (max-width: 1040px) {
        .mindmap__img {
            display: none;
        }
        .mindmap__subtitle {
            max-width: 100%;
        }
        .mindmap__title {
            font-size: 50px;
        }
        .mindmap__info {
            margin-top: 90px;
        }
        .mindmap__table {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            gap: 10px;
        }
    .mindmap__card-vision {
        grid-column: 1 / 2;
        grid-row: auto; 
    }
    .mindmap__card-community, .mindmap__card-seedlings, .mindmap__card-metaverse, .mindmap__card-physical, .mindmap__card-bridge, .mindmap__card-seedlings {
        grid-column: auto;
        grid-row: auto; 
    }
    .mindmap__card-connect {
        grid-column: 1 / 3;
        grid-row: auto;
        height: 300px;
    }
    .mindmap__card {
        height: 200px;
        justify-content: start;
    }
    }
`