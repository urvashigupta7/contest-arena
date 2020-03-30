import React, { useState, useEffect } from 'react';
import { Markdown } from "react-showdown";
import Styled from "styled-components";
// const ProblemStatement=(props)=>{
  
//     window.MathJax = {
//         loader: { load: ["input/asciimath"] },
//         startup: {},
//         tex: {
//           inlineMath: [["$", "$"], ["\\(", "\\)"]],
//           processEscapes: true,
//         },
//       };
//     const[partState,setPartState]=useState([]);  
//     const computeParts=()=>{
//         const arr = props.statement.split("### ");
//         let parts=[];
//         parts.push({ body: arr[1], line: true });

//         for (let i = 2; i < arr.length; i++) {
//           const str = arr[i];
//           for (let j = 0; j < str.length; j++) {
//             const c = str[j];
//             const isChar =
//               (c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || c === " ";
//             if (!isChar) {
//               parts.push({
//                 head: str.substr(0, j),
//                 body: str.substr(j, str.length - j),
//                 line: !(i === arr.length - 1),
//               });
//               break;
//             }
//           }
//         }
//         for (let i = 0; i < parts.length; i++) {
//           parts[i].key = i;
//         }
//         setPartState(parts);
//     }
//     useEffect(()=>{
//       console.log("hello")
//       computeParts();
//      //eslint-disable-next-line
//     },[])
    
//     return(
//        <div>
//           {partState.map(p => {
//           return !p.head && !p.body ? (
//             ""
//           ) : (
//             <div key={p.key}>
//               {p.head ? <h3>{p.head}</h3> : ""}
//               {
//                 <div>
//                   <Markdown markup={p.body} />
//                 </div>
//               }
//               {p.line ? <hr /> : ""}
//             </div>
//           );
//         })}
//        </div>
//     )

// }
// export default ProblemStatement;
window.MathJax = {
  loader: { load: ["input/asciimath"] },
  startup: {},
  tex: {
    inlineMath: [["$", "$"], [String.raw`\\(`, String.raw`\\)`]],
    processEscapes: true,
  },
};

const Root = Styled.div`
  width: 600px;
  margin-left: 90px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
  -webkit-box-shadow: 0px 0px 8px 2px rgba(163, 145, 163, 1);
  -moz-box-shadow: 0px 0px 8px 2px rgba(163, 145, 163, 1);
  box-shadow: 0px 0px 8px 2px rgba(163, 145, 163, 1);
  border-radius: 2px;
`;

// pass problem statement as prop and store in state
class ProblemStatement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps({ statement }) {
    const arr = statement.split("### ");

    let parts = [];
    parts.push({ body: arr[1], line: true });

    for (let i = 2; i < arr.length; i++) {
      const str = arr[i];
      for (let j = 0; j < str.length; j++) {
        const c = str[j];
        const isChar =
          (c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || c === " ";
        if (!isChar) {
          parts.push({
            head: str.substr(0, j),
            body: str.substr(j, str.length - j),
            line: !(i === arr.length - 1),
          });
          break;
        }
      }
    }
    for (let i = 0; i < parts.length; i++) {
      parts[i].key = i;
    }
    return { parts };
  }

  render() {
    const { parts } = this.state;

    return (
      <Root>
        {parts.map(p => {
          return !p.head && !p.body ? (
            ""
          ) : (
            <div key={p.key}>
              {p.head ? <h3>{p.head}</h3> : ""}
              {
                <div>
                  <Markdown markup={p.body} />
                </div>
              }
              {p.line ? <hr /> : ""}
            </div>
          );
        })}
      </Root>
    );
  }
}

export default ProblemStatement;