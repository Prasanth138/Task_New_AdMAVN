import React, { useState } from "react";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import "./Task1.css";

function Task1() {
  const [bucket1, setBucket1] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
  ]);
  const [bucket2, setBucket2] = useState([]);

  const [selectedItemIndices, setSelectedItemIndices] = useState([]);

  const handleAdd = () => {
    // Add selected items from bucket1 to bucket2
    const newBucket2 = [...bucket2];
    const newBucket1 = bucket1.filter((item, index) => {
      if (selectedItemIndices.includes(index)) {
        newBucket2.push(item);
        return false;
      }
      return true;
    });
    setBucket2(newBucket2);
    setBucket1(newBucket1);

    // Reset selected items
    setSelectedItemIndices([]);
  };

  const handleRemove = () => {
    // Add selected items from bucket2 to bucket1
    const newBucket1 = [...bucket1];
    const newBucket2 = bucket2.filter((item, index) => {
      if (selectedItemIndices.includes(index + bucket1.length)) {
        newBucket1.push(item);
        return false;
      }
      return true;
    });
    setBucket1(newBucket1);
    setBucket2(newBucket2);

    // Reset selected items
    setSelectedItemIndices([]);
  };

  const handleAddAll = () => {
    // Move all items from bucket1 to bucket2
    setBucket2([...bucket2, ...bucket1]);
    setBucket1([]);

    // Reset selected items
    setSelectedItemIndices([]);
  };

  const handleRemoveAll = () => {
    // Move all items from bucket2 to bucket1
    setBucket1([...bucket1, ...bucket2]);
    setBucket2([]);

    // Reset selected items
    setSelectedItemIndices([]);
  };

  const handleSelect = (index) => {
    if (selectedItemIndices.includes(index)) {
      setSelectedItemIndices(selectedItemIndices.filter((i) => i !== index));
    } else {
      setSelectedItemIndices([...selectedItemIndices, index]);
    }
  };

  return (
    <Container className="cont">
      <h1 className="heading">Problem 1 - Element Transfer</h1>
      <Row>
        <Col>
          <h3>Bucket 1</h3>
          <ListGroup>
            {bucket1.map((item, index) => (
              <ListGroup.Item
                key={index}
                onClick={() => handleSelect(index)}
                className={
                  selectedItemIndices.includes(index) ? "highlighted" : ""
                }
              >
                {item}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col className="buttons">
          <Button
            variant="success"
            onClick={handleAdd}
            disabled={selectedItemIndices.length === 0}
          >
            Add &rarr;
          </Button>
          <Button
            variant="danger"
            onClick={handleRemove}
            disabled={selectedItemIndices.length === 0}
          >
            &larr; Remove
          </Button>
          <Button
            variant="success"
            onClick={handleAddAll}
            disabled={bucket1.length === 0}
          >
            Add All &rarr;&rarr;
          </Button>
          <Button
            variant="danger"
            onClick={handleRemoveAll}
            disabled={bucket2.length === 0}
          >
            &larr;&larr; Remove All
          </Button>
        </Col>
        <Col>
          <h3>Bucket 2</h3>
          <ListGroup>
            {bucket2.map((item, index) => (
              <ListGroup.Item
                key={index}
                onClick={() => handleSelect(index + bucket1.length)}
                className={
                  selectedItemIndices.includes(index + bucket1.length)
                    ? "highlighted"
                    : ""
                }
                // className={isSelected(index + bucket1.length) ? "highlighted" : ""}
              >
                {item}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Task1;

// import React, { useState } from 'react';
// import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
// import './Task1.css'

// function BucketTransfer() {
//   const [bucket1, setBucket1] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']);
//   const [bucket2, setBucket2] = useState([]);

//   const handleAdd = () => {
//     // Add selected items from bucket1 to bucket2
//     const selectedItems = bucket1.filter((item, index) => document.getElementById(`item${index}`).checked);
//     setBucket2([...bucket2, ...selectedItems]);
//     // Remove selected items from bucket1
//     const remainingItems = bucket1.filter((item, index) => !document.getElementById(`item${index}`).checked);
//     setBucket1(remainingItems);
//   };

//   const handleRemove = () => {
//     // Add selected items from bucket2 to bucket1
//     const selectedItems = bucket2.filter((item, index) => document.getElementById(`item${index + bucket1.length}`).checked);
//     setBucket1([...bucket1, ...selectedItems]);
//     // Remove selected items from bucket2
//     const remainingItems = bucket2.filter((item, index) => !document.getElementById(`item${index + bucket1.length}`).checked);
//     setBucket2(remainingItems);
//   };

//   const handleAddAll = () => {
//     // Move all items from bucket1 to bucket2
//     setBucket2([...bucket2, ...bucket1]);
//     setBucket1([]);
//   };

//   const handleRemoveAll = () => {
//     // Move all items from bucket2 to bucket1
//     setBucket1([...bucket1, ...bucket2]);
//     setBucket2([]);
//   };

//   return (
//     <Container className="cont">
//       <Row>
//         <Col>
//           <h3>Bucket 1</h3>
//           <ListGroup>
//             {bucket1.map((item, index) => (
//                <ListGroup.Item key={index}>
//                  <input type="checkbox" id={`item${index}`} />
//                  {item}
//                </ListGroup.Item>
//             ))}
//           </ListGroup>
//         </Col>
//         <Col className="buttons">
//           <Button variant="success" onClick={handleAdd}>
//             Add &rarr;
//           </Button>
//           <Button variant="danger" onClick={handleRemove}>
//             &larr; Remove
//           </Button>
//           <Button variant="success" onClick={handleAddAll}>
//             Add All &rarr;&rarr;
//           </Button>
//           <Button variant="danger" onClick={handleRemoveAll}>
//             &larr;&larr; Remove All
//           </Button>
//         </Col>
//         <Col>
//           <h3>Bucket 2</h3>
//           <ListGroup>
//             {bucket2.map((item, index) => (
//               <ListGroup.Item key={index + bucket1.length}>
//                 <input type="checkbox" id={`item${index + bucket1.length}`} />
//                 {item}
//               </ListGroup.Item>
//             ))}
//           </ListGroup>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default BucketTransfer;

// import React, { useState } from 'react';
// import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
// import './Task1.css'

// function BucketTransfer() {
//   const [bucket1, setBucket1] = useState([
//     "Item 1",
//     "Item 2",
//     "Item 3",
//     "Item 4",
//     "Item 5",
//     "Item 6",
//   ]);
//   const [bucket2, setBucket2] = useState([]);

//   const [selectedItemIndex, setSelectedItemIndex] = useState(null);

//   const handleAdd = () => {
//     // Add selected item from bucket1 to bucket2
//     const selectedItem = bucket1[selectedItemIndex];
//     setBucket2([...bucket2, selectedItem]);

//     // Remove selected item from bucket1
//     const newBucket1 = [...bucket1];
//     newBucket1.splice(selectedItemIndex, 1);
//     setBucket1(newBucket1);

//     // Reset selected item
//     setSelectedItemIndex(null);
//   };

//   const handleRemove = () => {
//     // Add selected item from bucket2 to bucket1
//     const selectedItem = bucket2[selectedItemIndex - bucket1.length];
//     setBucket1([...bucket1, selectedItem]);

//     // Remove selected item from bucket2
//     const newBucket2 = [...bucket2];
//     newBucket2.splice(selectedItemIndex - bucket1.length, 1);
//     setBucket2(newBucket2);

//     // Reset selected item
//     setSelectedItemIndex(null);
//   };

//   const handleAddAll = () => {
//     // Move all items from bucket1 to bucket2
//     setBucket2([...bucket2, ...bucket1]);
//     setBucket1([]);
//   };

//   const handleRemoveAll = () => {
//     // Move all items from bucket2 to bucket1
//     setBucket1([...bucket1, ...bucket2]);
//     setBucket2([]);
//   };

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <h3>Bucket 1</h3>
//           <ListGroup>
//             {bucket1.map((item, index) => (
//               <ListGroup.Item
//                 key={index}
//                 onClick={() => setSelectedItemIndex(index)}
//                 className={selectedItemIndex === index ? "highlighted" : ""}
//               >
//                 {item}
//               </ListGroup.Item>
//             ))}
//           </ListGroup>
//         </Col>
//         <Col className="buttons">
//           <Button
//             variant="success"
//             onClick={handleAdd}
//             disabled={
//               selectedItemIndex === null || selectedItemIndex >= bucket1.length
//             }
//           >
//             Add &rarr;
//           </Button>
//           <Button
//             variant="danger"
//             onClick={handleRemove}
//             disabled={
//               selectedItemIndex === null || selectedItemIndex < bucket1.length
//             }
//           >
//             &larr; Remove
//           </Button>
//           <Button
//             variant="success"
//             onClick={handleAddAll}
//             disabled={bucket1.length === 0}
//           >
//             Add All &rarr;&rarr;
//           </Button>
//           <Button
//             variant="danger"
//             onClick={handleRemoveAll}
//             disabled={bucket2.length === 0}
//           >
//             &larr;&larr; Remove All
//           </Button>
//         </Col>
//         <Col>
//           <h3>Bucket 2</h3>
//           <ListGroup>
//             {bucket2.map((item, index) => (
//               <ListGroup.Item
//                 key={index + bucket1.length}
//                 onClick={() => setSelectedItemIndex(index + bucket1.length)}
//                 className={
//                   selectedItemIndex === index + bucket1.length
//                     ? "highlighted"
//                     : ""
//                 }
//               >
//                 {item}
//               </ListGroup.Item>
//             ))}
//           </ListGroup>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default BucketTransfer;

// import React, { useState } from 'react';
// import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
// import './Task1.css'

// function BucketTransfer() {
//   const [bucket1, setBucket1] = useState([
//     "Item 1",
//     "Item 2",
//     "Item 3",
//     "Item 4",
//     "Item 5",
//     "Item 6",
//   ]);
//   const [bucket2, setBucket2] = useState([]);

//   const [selectedItemIndices, setSelectedItemIndices] = useState(new Set());

//   const handleAdd = () => {
//     // Add selected items from bucket1 to bucket2
//     const newBucket2 = [...bucket2];
//     for (const index of selectedItemIndices) {
//       newBucket2.push(bucket1[index]);
//     }
//     setBucket2(newBucket2);

//     // Remove selected items from bucket1
//     const newBucket1 = bucket1.filter((_, index) => !selectedItemIndices.has(index));
//     setBucket1(newBucket1);

//     // Reset selected items
//     setSelectedItemIndices(new Set());
//   };

//   const handleRemove = () => {
//     // Add selected items from bucket2 to bucket1
//     const newBucket1 = [...bucket1];
//     for (const index of selectedItemIndices) {
//       newBucket1.push(bucket2[index - bucket1.length]);
//     }
//     setBucket1(newBucket1);

//     // Remove selected items from bucket2
//     const newBucket2 = bucket2.filter((_, index) => !selectedItemIndices.has(index - bucket1.length));
//     setBucket2(newBucket2);

//     // Reset selected items
//     setSelectedItemIndices(new Set());
//   };

//   const handleAddAll = () => {
//     // Move all items from bucket1 to bucket2
//     setBucket2([...bucket2, ...bucket1]);
//     setBucket1([]);
//   };

//   const handleRemoveAll = () => {
//     // Move all items from bucket2 to bucket1
//     setBucket1([...bucket1, ...bucket2]);
//     setBucket2([]);

//     // Reset selected items
//     setSelectedItemIndices(new Set());
//   };

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <h3>Bucket 1</h3>
//           <ListGroup>
//             {bucket1.map((item, index) => (
//               <ListGroup.Item
//                 key={index}
//                 onClick={() => {
//                   if (selectedItemIndices.has(index)) {
//                     const newSelectedItems = new Set(selectedItemIndices);
//                     newSelectedItems.delete(index);
//                     setSelectedItemIndices(newSelectedItems);
//                   } else {
//                     setSelectedItemIndices(new Set([...selectedItemIndices, index]));
//                   }
//                 }}
//                 className={
//                   selectedItemIndices.has(index)
//                     ? "highlighted"
//                     : ""
//                 }
//               >
//                 {item}
//               </ListGroup.Item>
//             ))}
//           </ListGroup>
//         </Col>
//         <Col className="buttons">
//           <Button
//             variant="success"
//             onClick={handleAdd}
//             disabled={selectedItemIndices.size === 0}
//           >
//             Add &rarr;
//           </Button>
//           <Button
//             variant="danger"
//             onClick={handleRemove}
//             disabled={selectedItemIndices.size === 0}
//           >
//             &larr; Remove
//           </Button>
//           <Button
//             variant="success"
//             onClick={handleAddAll}
//             disabled={bucket1.length === 0}
//           >
//             Add All &rarr;&rarr;
//           </Button>
//           <Button
//             variant="danger"
//             onClick={handleRemoveAll}
//             disabled={bucket2.length === 0}
//           >
//             &larr;&larr; Remove All
//           </Button>
//           </Col>
//           <Col>
//         <h3>Bucket 2</h3>
//         <ListGroup>
//           {bucket2.map((item, index) => (
//             <ListGroup.Item
//             key={index}
//             onClick={() => {
//               if (selectedItemIndices.has(index)) {
//                 const newSelectedItems = new Set(selectedItemIndices);
//                 newSelectedItems.delete(index);
//                 setSelectedItemIndices(newSelectedItems);
//               } else {
//                 setSelectedItemIndices(new Set([...selectedItemIndices, index]));
//               }
//             }}
//             className={
//               selectedItemIndices.has(index)
//                 ? "highlighted"
//                 : ""
//             }
//           >
//               {item}
//             </ListGroup.Item>
//           ))}
//         </ListGroup>
//       </Col>
//     </Row>
//   </Container>
// );
// }

// export default BucketTransfer;
