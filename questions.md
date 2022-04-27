{\rtf1\ansi\ansicpg1251\cocoartf1671\cocoasubrtf600
{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fswiss\fcharset0 Arial-BoldMT;\f2\fswiss\fcharset0 ArialMT;
\f3\fnil\fcharset0 Menlo-Regular;\f4\froman\fcharset0 Times-Roman;\f5\fnil\fcharset0 HelveticaNeue;
}
{\colortbl;\red255\green255\blue255;\red174\green179\blue182;\red24\green25\blue27;\red175\green180\blue186;
\red0\green0\blue0;\red255\green255\blue255;\red25\green142\blue194;\red224\green224\blue223;\red46\green166\blue11;
\red127\green134\blue135;\red223\green161\blue103;\red20\green37\blue46;\red83\green83\blue83;\red26\green28\blue31;
\red255\green255\blue255;}
{\*\expandedcolortbl;;\cssrgb\c73725\c75294\c76471;\cssrgb\c12549\c12941\c14118;\cssrgb\c74118\c75686\c77647;
\cssrgb\c0\c0\c0;\cssrgb\c100000\c100000\c99985\c0;\cssrgb\c8254\c62603\c80603;\cssrgb\c90197\c90197\c89747;\cssrgb\c20415\c69381\c3541;
\cssrgb\c57145\c59508\c60007;\cssrgb\c90378\c69067\c47830;\cssrgb\c9855\c19277\c23579;\cssrgb\c40044\c40044\c39994;\cssrgb\c13725\c14902\c16078;
\cssrgb\c100000\c100000\c100000;}
{\*\listtable{\list\listtemplateid1\listhybrid{\listlevel\levelnfc0\levelnfcn0\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{decimal\}.}{\leveltext\leveltemplateid1\'02\'00.;}{\levelnumbers\'01;}\fi-360\li720\lin720 }{\listname ;}\listid1}}
{\*\listoverridetable{\listoverride\listid1\listoverridecount0\ls1}}
\paperw11900\paperh16840\margl1440\margr1440\vieww20080\viewh12500\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 1. What is the difference between Component and PureComponent? give an\
example where it might break my app.\
\
Pure component in React is a component with already implemented \'91shouldComponentUpdate\'92 method which does shallow equality of previous state and props with current state and props of component. This prevent component from unnecessary rerenders in some cases. It might break the app if we do change props (or state) on deep level so our component will not be rerendered to display the changes.\
\
2. Context + ShouldComponentUpdate might be dangerous. Can think of why is\
that?\
\
I described the reasons on previous answer. Context providing some data deep to the tree of react components so the changes in the context value might not be caused the component rerenders and displays fresh data.\
\
3. Describe 3 ways to pass information from a component to its PARENT.\
\
Via callback send down from parent\
Via context API\
Via Redux\
\
\
4. Give 2 ways to prevent components from re-rendering.\
\
Implemented method shouldComponentUpdate (or using pureComponent)\
Using useRef rather than useState. Ref updating not triggers component rerender\
\
5. What is a fragment and why do we need it? Give an example where it might\
break my app.\
\
\pard\pardeftab720\sl320\partightenfactor0

\f1\b\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 Fragments
\f2\b0 \cf4 \strokec4 \'a0let to group a list of children without adding extra nodes to the DOM.
\f0\fs24 \cf0 \cb1 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 \
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0
\cf0 \
6. Give 3 examples of the HOC pattern.\
\
connect in react-redux\
\
\pard\pardeftab720\sl452\partightenfactor0

\f3\fs32\fsmilli16106 \cf5 \cb6 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec7 \shad\shadx0\shady-20\shadr0\shado255 \shadc0 function\cf5 \cb6 \strokec8  \cf5 \cb6 \strokec9 WithLoading\cf5 \cb6 \strokec10 (\cf5 \cb6 \strokec8 Component\cf5 \cb6 \strokec10 )\cf5 \cb6 \strokec8  \cf5 \cb6 \strokec10 \{\cf5 \cb6 \strokec8 \
  \cf5 \cb6 \strokec7 return\cf5 \cb6 \strokec8  \cf5 \cb6 \strokec7 function\cf5 \cb6 \strokec8  \cf5 \cb6 \strokec9 WihLoadingComponent\cf5 \cb6 \strokec10 (\{\cf5 \cb6 \strokec8  isLoading\cf5 \cb6 \strokec10 ,\cf5 \cb6 \strokec8  \cf5 \cb6 \strokec11 ...\cf5 \cb6 \strokec8 props \cf5 \cb6 \strokec10 \})\cf5 \cb6 \strokec8  \cf5 \cb6 \strokec10 \{\cf5 \cb6 \strokec8 \
    \cf5 \cb6 \strokec7 if\cf5 \cb6 \strokec8  \cf5 \cb6 \strokec10 (\cf5 \cb6 \strokec11 !\cf5 \cb6 \strokec8 isLoading\cf5 \cb6 \strokec10 )\cf5 \cb6 \strokec8  \cf5 \cb6 \strokec7 return\cf5 \cb6 \strokec8  \cf5 \cb6 \strokec11 <\cf5 \cb6 \strokec8 Component \cf5 \cb6 \strokec10 \{\cf5 \cb6 \strokec11 ...\cf5 \cb6 \strokec8 props\cf5 \cb6 \strokec10 \}\cf5 \cb6 \strokec8  \cf5 \cb6 \strokec11 />\cf5 \cb6 \strokec10 ;\cf5 \cb6 \strokec8 \
    \cf5 \cb6 \strokec7 return\cf5 \cb6 \strokec8  \cf5 \cb6 \strokec11 <\cf5 \cb6 \strokec8 p\cf5 \cb6 \strokec11 >\cf5 \cb6 \strokec8 Loading\cf5 \cb6 \strokec11 </\cf5 \cb6 \strokec8 p\cf5 \cb6 \strokec11 >\cf5 \cb6 \strokec10 ;\cf5 \cb6 \strokec8 \
  \cf5 \cb6 \strokec10 \};\cf5 \cb6 \strokec8 \
\cf5 \cb6 \strokec10 \}
\fs40\fsmilli20409 \cf5 \cb12 \strokec13 \
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf5 \cb1 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 \shad0 \
\pard\pardeftab720\sl300\partightenfactor0

\f4\fs26 \cf5 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec5 const
\fs24  
\fs26 withClasses
\fs24  = (
\fs26 WrappedComponent, classes
\fs24 ) => \{\

\fs26 return
\fs24  
\fs26 (props) =>
\fs24  (\
\pard\pardeftab720\sl280\partightenfactor0
\cf5     
\fs26 <div className=\{classes\}>\
\pard\pardeftab720\sl300\partightenfactor0
\cf5         <WrappedComponent \{...props\} />\
    </div>
\fs24 \
\pard\pardeftab720\sl280\partightenfactor0
\cf5        );\
\};\
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0 \cf5 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 \
\
\cf0 \
\
7. what's the difference in handling exceptions in promises, callbacks and\
async...await.\
\
Using callbacks we producing callbacks hell because every time we use callbacks we produce one additional level of nesting\
Promises are much more convenient	because using them we produce only one level of nesting\
When use Async.await we write sync code, not producing additional nesting in code and our code will be executed line by line.\
\
8. How many arguments does setState take and why is it async.\
\
It takes 2 arguments (new value or function which return newValue and callback which will be executed after state value set up). setState is async because react can optimize setState operations batching them or squashing them into one.	\
\
9. List the steps needed to migrate a Class to Function Component.\
\
Change class to function\
Start using hooks (useState for local state and useEffect to emulate didMount, didUpdate and willUnmount)\
Render function in Class component is a returning from a functional component function\
\
10. List a few ways styles can be used with components.\

\f2\fs32 \cf4 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec4 Inline CSS.\cb1 \
\pard\tx220\tx720\pardeftab720\li720\fi-720\sl360\sa80\partightenfactor0
\ls1\ilvl0\cf4 \cb3 CSS in JS.\cb1 \
\ls1\ilvl0\cb3 Styled Components.\cb1 \
\ls1\ilvl0\cb3 Stylable.\cb1 \
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 \
\
11. How to render an HTML string coming from the server.\
\
Use method 
\f5\fs30 \cf14 \cb15 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec14 dangerouslySetInnerHTML}