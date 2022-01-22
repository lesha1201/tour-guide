export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AvifOptions = {
  lossless?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};

export type DirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'absolutePath'
  | 'accessTime'
  | 'atime'
  | 'atimeMs'
  | 'base'
  | 'birthTime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'changeTime'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'ctime'
  | 'ctimeMs'
  | 'dev'
  | 'dir'
  | 'ext'
  | 'extension'
  | 'gid'
  | 'id'
  | 'ino'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'mode'
  | 'modifiedTime'
  | 'mtime'
  | 'mtimeMs'
  | 'name'
  | 'nlink'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'prettySize'
  | 'rdev'
  | 'relativeDirectory'
  | 'relativePath'
  | 'root'
  | 'size'
  | 'sourceInstanceName'
  | 'uid';

export type DirectoryFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
  shadow: Scalars['String'];
};

export type File = Node & {
  __typename?: 'File';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  changeTime: Scalars['Date'];
  /** Returns the first child node of type GalleryYaml or null if there are no children of given type on this node */
  childGalleryYaml?: Maybe<GalleryYaml>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
  /** Returns the first child node of type TestimonialsYaml or null if there are no children of given type on this node */
  childTestimonialsYaml?: Maybe<TestimonialsYaml>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type GalleryYaml */
  childrenGalleryYaml?: Maybe<Array<Maybe<GalleryYaml>>>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns all children nodes filtered by type TestimonialsYaml */
  childrenTestimonialsYaml?: Maybe<Array<Maybe<TestimonialsYaml>>>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};

export type FileAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum =
  | 'absolutePath'
  | 'accessTime'
  | 'atime'
  | 'atimeMs'
  | 'base'
  | 'birthTime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'changeTime'
  | 'childGalleryYaml___children'
  | 'childGalleryYaml___children___children'
  | 'childGalleryYaml___children___children___children'
  | 'childGalleryYaml___children___children___id'
  | 'childGalleryYaml___children___id'
  | 'childGalleryYaml___children___internal___content'
  | 'childGalleryYaml___children___internal___contentDigest'
  | 'childGalleryYaml___children___internal___description'
  | 'childGalleryYaml___children___internal___fieldOwners'
  | 'childGalleryYaml___children___internal___ignoreType'
  | 'childGalleryYaml___children___internal___mediaType'
  | 'childGalleryYaml___children___internal___owner'
  | 'childGalleryYaml___children___internal___type'
  | 'childGalleryYaml___children___parent___children'
  | 'childGalleryYaml___children___parent___id'
  | 'childGalleryYaml___id'
  | 'childGalleryYaml___image___absolutePath'
  | 'childGalleryYaml___image___accessTime'
  | 'childGalleryYaml___image___atime'
  | 'childGalleryYaml___image___atimeMs'
  | 'childGalleryYaml___image___base'
  | 'childGalleryYaml___image___birthTime'
  | 'childGalleryYaml___image___birthtime'
  | 'childGalleryYaml___image___birthtimeMs'
  | 'childGalleryYaml___image___blksize'
  | 'childGalleryYaml___image___blocks'
  | 'childGalleryYaml___image___changeTime'
  | 'childGalleryYaml___image___childGalleryYaml___children'
  | 'childGalleryYaml___image___childGalleryYaml___id'
  | 'childGalleryYaml___image___childGalleryYaml___title'
  | 'childGalleryYaml___image___childImageSharp___children'
  | 'childGalleryYaml___image___childImageSharp___gatsbyImageData'
  | 'childGalleryYaml___image___childImageSharp___id'
  | 'childGalleryYaml___image___childMdx___body'
  | 'childGalleryYaml___image___childMdx___children'
  | 'childGalleryYaml___image___childMdx___excerpt'
  | 'childGalleryYaml___image___childMdx___fileAbsolutePath'
  | 'childGalleryYaml___image___childMdx___headings'
  | 'childGalleryYaml___image___childMdx___html'
  | 'childGalleryYaml___image___childMdx___id'
  | 'childGalleryYaml___image___childMdx___mdxAST'
  | 'childGalleryYaml___image___childMdx___rawBody'
  | 'childGalleryYaml___image___childMdx___slug'
  | 'childGalleryYaml___image___childMdx___tableOfContents'
  | 'childGalleryYaml___image___childMdx___timeToRead'
  | 'childGalleryYaml___image___childTestimonialsYaml___children'
  | 'childGalleryYaml___image___childTestimonialsYaml___fullName'
  | 'childGalleryYaml___image___childTestimonialsYaml___id'
  | 'childGalleryYaml___image___childTestimonialsYaml___text'
  | 'childGalleryYaml___image___children'
  | 'childGalleryYaml___image___childrenGalleryYaml'
  | 'childGalleryYaml___image___childrenGalleryYaml___children'
  | 'childGalleryYaml___image___childrenGalleryYaml___id'
  | 'childGalleryYaml___image___childrenGalleryYaml___title'
  | 'childGalleryYaml___image___childrenImageSharp'
  | 'childGalleryYaml___image___childrenImageSharp___children'
  | 'childGalleryYaml___image___childrenImageSharp___gatsbyImageData'
  | 'childGalleryYaml___image___childrenImageSharp___id'
  | 'childGalleryYaml___image___childrenMdx'
  | 'childGalleryYaml___image___childrenMdx___body'
  | 'childGalleryYaml___image___childrenMdx___children'
  | 'childGalleryYaml___image___childrenMdx___excerpt'
  | 'childGalleryYaml___image___childrenMdx___fileAbsolutePath'
  | 'childGalleryYaml___image___childrenMdx___headings'
  | 'childGalleryYaml___image___childrenMdx___html'
  | 'childGalleryYaml___image___childrenMdx___id'
  | 'childGalleryYaml___image___childrenMdx___mdxAST'
  | 'childGalleryYaml___image___childrenMdx___rawBody'
  | 'childGalleryYaml___image___childrenMdx___slug'
  | 'childGalleryYaml___image___childrenMdx___tableOfContents'
  | 'childGalleryYaml___image___childrenMdx___timeToRead'
  | 'childGalleryYaml___image___childrenTestimonialsYaml'
  | 'childGalleryYaml___image___childrenTestimonialsYaml___children'
  | 'childGalleryYaml___image___childrenTestimonialsYaml___fullName'
  | 'childGalleryYaml___image___childrenTestimonialsYaml___id'
  | 'childGalleryYaml___image___childrenTestimonialsYaml___text'
  | 'childGalleryYaml___image___children___children'
  | 'childGalleryYaml___image___children___id'
  | 'childGalleryYaml___image___ctime'
  | 'childGalleryYaml___image___ctimeMs'
  | 'childGalleryYaml___image___dev'
  | 'childGalleryYaml___image___dir'
  | 'childGalleryYaml___image___ext'
  | 'childGalleryYaml___image___extension'
  | 'childGalleryYaml___image___gid'
  | 'childGalleryYaml___image___id'
  | 'childGalleryYaml___image___ino'
  | 'childGalleryYaml___image___internal___content'
  | 'childGalleryYaml___image___internal___contentDigest'
  | 'childGalleryYaml___image___internal___description'
  | 'childGalleryYaml___image___internal___fieldOwners'
  | 'childGalleryYaml___image___internal___ignoreType'
  | 'childGalleryYaml___image___internal___mediaType'
  | 'childGalleryYaml___image___internal___owner'
  | 'childGalleryYaml___image___internal___type'
  | 'childGalleryYaml___image___mode'
  | 'childGalleryYaml___image___modifiedTime'
  | 'childGalleryYaml___image___mtime'
  | 'childGalleryYaml___image___mtimeMs'
  | 'childGalleryYaml___image___name'
  | 'childGalleryYaml___image___nlink'
  | 'childGalleryYaml___image___parent___children'
  | 'childGalleryYaml___image___parent___id'
  | 'childGalleryYaml___image___prettySize'
  | 'childGalleryYaml___image___publicURL'
  | 'childGalleryYaml___image___rdev'
  | 'childGalleryYaml___image___relativeDirectory'
  | 'childGalleryYaml___image___relativePath'
  | 'childGalleryYaml___image___root'
  | 'childGalleryYaml___image___size'
  | 'childGalleryYaml___image___sourceInstanceName'
  | 'childGalleryYaml___image___uid'
  | 'childGalleryYaml___internal___content'
  | 'childGalleryYaml___internal___contentDigest'
  | 'childGalleryYaml___internal___description'
  | 'childGalleryYaml___internal___fieldOwners'
  | 'childGalleryYaml___internal___ignoreType'
  | 'childGalleryYaml___internal___mediaType'
  | 'childGalleryYaml___internal___owner'
  | 'childGalleryYaml___internal___type'
  | 'childGalleryYaml___parent___children'
  | 'childGalleryYaml___parent___children___children'
  | 'childGalleryYaml___parent___children___id'
  | 'childGalleryYaml___parent___id'
  | 'childGalleryYaml___parent___internal___content'
  | 'childGalleryYaml___parent___internal___contentDigest'
  | 'childGalleryYaml___parent___internal___description'
  | 'childGalleryYaml___parent___internal___fieldOwners'
  | 'childGalleryYaml___parent___internal___ignoreType'
  | 'childGalleryYaml___parent___internal___mediaType'
  | 'childGalleryYaml___parent___internal___owner'
  | 'childGalleryYaml___parent___internal___type'
  | 'childGalleryYaml___parent___parent___children'
  | 'childGalleryYaml___parent___parent___id'
  | 'childGalleryYaml___title'
  | 'childImageSharp___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___id'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___original___width'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childMdx___body'
  | 'childMdx___children'
  | 'childMdx___children___children'
  | 'childMdx___children___children___children'
  | 'childMdx___children___children___id'
  | 'childMdx___children___id'
  | 'childMdx___children___internal___content'
  | 'childMdx___children___internal___contentDigest'
  | 'childMdx___children___internal___description'
  | 'childMdx___children___internal___fieldOwners'
  | 'childMdx___children___internal___ignoreType'
  | 'childMdx___children___internal___mediaType'
  | 'childMdx___children___internal___owner'
  | 'childMdx___children___internal___type'
  | 'childMdx___children___parent___children'
  | 'childMdx___children___parent___id'
  | 'childMdx___excerpt'
  | 'childMdx___fields___slug'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___coverImage___absolutePath'
  | 'childMdx___frontmatter___coverImage___accessTime'
  | 'childMdx___frontmatter___coverImage___atime'
  | 'childMdx___frontmatter___coverImage___atimeMs'
  | 'childMdx___frontmatter___coverImage___base'
  | 'childMdx___frontmatter___coverImage___birthTime'
  | 'childMdx___frontmatter___coverImage___birthtime'
  | 'childMdx___frontmatter___coverImage___birthtimeMs'
  | 'childMdx___frontmatter___coverImage___blksize'
  | 'childMdx___frontmatter___coverImage___blocks'
  | 'childMdx___frontmatter___coverImage___changeTime'
  | 'childMdx___frontmatter___coverImage___children'
  | 'childMdx___frontmatter___coverImage___childrenGalleryYaml'
  | 'childMdx___frontmatter___coverImage___childrenImageSharp'
  | 'childMdx___frontmatter___coverImage___childrenMdx'
  | 'childMdx___frontmatter___coverImage___childrenTestimonialsYaml'
  | 'childMdx___frontmatter___coverImage___ctime'
  | 'childMdx___frontmatter___coverImage___ctimeMs'
  | 'childMdx___frontmatter___coverImage___dev'
  | 'childMdx___frontmatter___coverImage___dir'
  | 'childMdx___frontmatter___coverImage___ext'
  | 'childMdx___frontmatter___coverImage___extension'
  | 'childMdx___frontmatter___coverImage___gid'
  | 'childMdx___frontmatter___coverImage___id'
  | 'childMdx___frontmatter___coverImage___ino'
  | 'childMdx___frontmatter___coverImage___mode'
  | 'childMdx___frontmatter___coverImage___modifiedTime'
  | 'childMdx___frontmatter___coverImage___mtime'
  | 'childMdx___frontmatter___coverImage___mtimeMs'
  | 'childMdx___frontmatter___coverImage___name'
  | 'childMdx___frontmatter___coverImage___nlink'
  | 'childMdx___frontmatter___coverImage___prettySize'
  | 'childMdx___frontmatter___coverImage___publicURL'
  | 'childMdx___frontmatter___coverImage___rdev'
  | 'childMdx___frontmatter___coverImage___relativeDirectory'
  | 'childMdx___frontmatter___coverImage___relativePath'
  | 'childMdx___frontmatter___coverImage___root'
  | 'childMdx___frontmatter___coverImage___size'
  | 'childMdx___frontmatter___coverImage___sourceInstanceName'
  | 'childMdx___frontmatter___coverImage___uid'
  | 'childMdx___frontmatter___createdAt'
  | 'childMdx___frontmatter___description'
  | 'childMdx___frontmatter___duration'
  | 'childMdx___frontmatter___gallery'
  | 'childMdx___frontmatter___gallery___absolutePath'
  | 'childMdx___frontmatter___gallery___accessTime'
  | 'childMdx___frontmatter___gallery___atime'
  | 'childMdx___frontmatter___gallery___atimeMs'
  | 'childMdx___frontmatter___gallery___base'
  | 'childMdx___frontmatter___gallery___birthTime'
  | 'childMdx___frontmatter___gallery___birthtime'
  | 'childMdx___frontmatter___gallery___birthtimeMs'
  | 'childMdx___frontmatter___gallery___blksize'
  | 'childMdx___frontmatter___gallery___blocks'
  | 'childMdx___frontmatter___gallery___changeTime'
  | 'childMdx___frontmatter___gallery___children'
  | 'childMdx___frontmatter___gallery___childrenGalleryYaml'
  | 'childMdx___frontmatter___gallery___childrenImageSharp'
  | 'childMdx___frontmatter___gallery___childrenMdx'
  | 'childMdx___frontmatter___gallery___childrenTestimonialsYaml'
  | 'childMdx___frontmatter___gallery___ctime'
  | 'childMdx___frontmatter___gallery___ctimeMs'
  | 'childMdx___frontmatter___gallery___dev'
  | 'childMdx___frontmatter___gallery___dir'
  | 'childMdx___frontmatter___gallery___ext'
  | 'childMdx___frontmatter___gallery___extension'
  | 'childMdx___frontmatter___gallery___gid'
  | 'childMdx___frontmatter___gallery___id'
  | 'childMdx___frontmatter___gallery___ino'
  | 'childMdx___frontmatter___gallery___mode'
  | 'childMdx___frontmatter___gallery___modifiedTime'
  | 'childMdx___frontmatter___gallery___mtime'
  | 'childMdx___frontmatter___gallery___mtimeMs'
  | 'childMdx___frontmatter___gallery___name'
  | 'childMdx___frontmatter___gallery___nlink'
  | 'childMdx___frontmatter___gallery___prettySize'
  | 'childMdx___frontmatter___gallery___publicURL'
  | 'childMdx___frontmatter___gallery___rdev'
  | 'childMdx___frontmatter___gallery___relativeDirectory'
  | 'childMdx___frontmatter___gallery___relativePath'
  | 'childMdx___frontmatter___gallery___root'
  | 'childMdx___frontmatter___gallery___size'
  | 'childMdx___frontmatter___gallery___sourceInstanceName'
  | 'childMdx___frontmatter___gallery___uid'
  | 'childMdx___frontmatter___price'
  | 'childMdx___frontmatter___template'
  | 'childMdx___frontmatter___title'
  | 'childMdx___headings'
  | 'childMdx___headings___depth'
  | 'childMdx___headings___value'
  | 'childMdx___html'
  | 'childMdx___id'
  | 'childMdx___internal___content'
  | 'childMdx___internal___contentDigest'
  | 'childMdx___internal___description'
  | 'childMdx___internal___fieldOwners'
  | 'childMdx___internal___ignoreType'
  | 'childMdx___internal___mediaType'
  | 'childMdx___internal___owner'
  | 'childMdx___internal___type'
  | 'childMdx___mdxAST'
  | 'childMdx___parent___children'
  | 'childMdx___parent___children___children'
  | 'childMdx___parent___children___id'
  | 'childMdx___parent___id'
  | 'childMdx___parent___internal___content'
  | 'childMdx___parent___internal___contentDigest'
  | 'childMdx___parent___internal___description'
  | 'childMdx___parent___internal___fieldOwners'
  | 'childMdx___parent___internal___ignoreType'
  | 'childMdx___parent___internal___mediaType'
  | 'childMdx___parent___internal___owner'
  | 'childMdx___parent___internal___type'
  | 'childMdx___parent___parent___children'
  | 'childMdx___parent___parent___id'
  | 'childMdx___rawBody'
  | 'childMdx___slug'
  | 'childMdx___tableOfContents'
  | 'childMdx___timeToRead'
  | 'childMdx___wordCount___paragraphs'
  | 'childMdx___wordCount___sentences'
  | 'childMdx___wordCount___words'
  | 'childTestimonialsYaml___avatar___absolutePath'
  | 'childTestimonialsYaml___avatar___accessTime'
  | 'childTestimonialsYaml___avatar___atime'
  | 'childTestimonialsYaml___avatar___atimeMs'
  | 'childTestimonialsYaml___avatar___base'
  | 'childTestimonialsYaml___avatar___birthTime'
  | 'childTestimonialsYaml___avatar___birthtime'
  | 'childTestimonialsYaml___avatar___birthtimeMs'
  | 'childTestimonialsYaml___avatar___blksize'
  | 'childTestimonialsYaml___avatar___blocks'
  | 'childTestimonialsYaml___avatar___changeTime'
  | 'childTestimonialsYaml___avatar___childGalleryYaml___children'
  | 'childTestimonialsYaml___avatar___childGalleryYaml___id'
  | 'childTestimonialsYaml___avatar___childGalleryYaml___title'
  | 'childTestimonialsYaml___avatar___childImageSharp___children'
  | 'childTestimonialsYaml___avatar___childImageSharp___gatsbyImageData'
  | 'childTestimonialsYaml___avatar___childImageSharp___id'
  | 'childTestimonialsYaml___avatar___childMdx___body'
  | 'childTestimonialsYaml___avatar___childMdx___children'
  | 'childTestimonialsYaml___avatar___childMdx___excerpt'
  | 'childTestimonialsYaml___avatar___childMdx___fileAbsolutePath'
  | 'childTestimonialsYaml___avatar___childMdx___headings'
  | 'childTestimonialsYaml___avatar___childMdx___html'
  | 'childTestimonialsYaml___avatar___childMdx___id'
  | 'childTestimonialsYaml___avatar___childMdx___mdxAST'
  | 'childTestimonialsYaml___avatar___childMdx___rawBody'
  | 'childTestimonialsYaml___avatar___childMdx___slug'
  | 'childTestimonialsYaml___avatar___childMdx___tableOfContents'
  | 'childTestimonialsYaml___avatar___childMdx___timeToRead'
  | 'childTestimonialsYaml___avatar___childTestimonialsYaml___children'
  | 'childTestimonialsYaml___avatar___childTestimonialsYaml___fullName'
  | 'childTestimonialsYaml___avatar___childTestimonialsYaml___id'
  | 'childTestimonialsYaml___avatar___childTestimonialsYaml___text'
  | 'childTestimonialsYaml___avatar___children'
  | 'childTestimonialsYaml___avatar___childrenGalleryYaml'
  | 'childTestimonialsYaml___avatar___childrenGalleryYaml___children'
  | 'childTestimonialsYaml___avatar___childrenGalleryYaml___id'
  | 'childTestimonialsYaml___avatar___childrenGalleryYaml___title'
  | 'childTestimonialsYaml___avatar___childrenImageSharp'
  | 'childTestimonialsYaml___avatar___childrenImageSharp___children'
  | 'childTestimonialsYaml___avatar___childrenImageSharp___gatsbyImageData'
  | 'childTestimonialsYaml___avatar___childrenImageSharp___id'
  | 'childTestimonialsYaml___avatar___childrenMdx'
  | 'childTestimonialsYaml___avatar___childrenMdx___body'
  | 'childTestimonialsYaml___avatar___childrenMdx___children'
  | 'childTestimonialsYaml___avatar___childrenMdx___excerpt'
  | 'childTestimonialsYaml___avatar___childrenMdx___fileAbsolutePath'
  | 'childTestimonialsYaml___avatar___childrenMdx___headings'
  | 'childTestimonialsYaml___avatar___childrenMdx___html'
  | 'childTestimonialsYaml___avatar___childrenMdx___id'
  | 'childTestimonialsYaml___avatar___childrenMdx___mdxAST'
  | 'childTestimonialsYaml___avatar___childrenMdx___rawBody'
  | 'childTestimonialsYaml___avatar___childrenMdx___slug'
  | 'childTestimonialsYaml___avatar___childrenMdx___tableOfContents'
  | 'childTestimonialsYaml___avatar___childrenMdx___timeToRead'
  | 'childTestimonialsYaml___avatar___childrenTestimonialsYaml'
  | 'childTestimonialsYaml___avatar___childrenTestimonialsYaml___children'
  | 'childTestimonialsYaml___avatar___childrenTestimonialsYaml___fullName'
  | 'childTestimonialsYaml___avatar___childrenTestimonialsYaml___id'
  | 'childTestimonialsYaml___avatar___childrenTestimonialsYaml___text'
  | 'childTestimonialsYaml___avatar___children___children'
  | 'childTestimonialsYaml___avatar___children___id'
  | 'childTestimonialsYaml___avatar___ctime'
  | 'childTestimonialsYaml___avatar___ctimeMs'
  | 'childTestimonialsYaml___avatar___dev'
  | 'childTestimonialsYaml___avatar___dir'
  | 'childTestimonialsYaml___avatar___ext'
  | 'childTestimonialsYaml___avatar___extension'
  | 'childTestimonialsYaml___avatar___gid'
  | 'childTestimonialsYaml___avatar___id'
  | 'childTestimonialsYaml___avatar___ino'
  | 'childTestimonialsYaml___avatar___internal___content'
  | 'childTestimonialsYaml___avatar___internal___contentDigest'
  | 'childTestimonialsYaml___avatar___internal___description'
  | 'childTestimonialsYaml___avatar___internal___fieldOwners'
  | 'childTestimonialsYaml___avatar___internal___ignoreType'
  | 'childTestimonialsYaml___avatar___internal___mediaType'
  | 'childTestimonialsYaml___avatar___internal___owner'
  | 'childTestimonialsYaml___avatar___internal___type'
  | 'childTestimonialsYaml___avatar___mode'
  | 'childTestimonialsYaml___avatar___modifiedTime'
  | 'childTestimonialsYaml___avatar___mtime'
  | 'childTestimonialsYaml___avatar___mtimeMs'
  | 'childTestimonialsYaml___avatar___name'
  | 'childTestimonialsYaml___avatar___nlink'
  | 'childTestimonialsYaml___avatar___parent___children'
  | 'childTestimonialsYaml___avatar___parent___id'
  | 'childTestimonialsYaml___avatar___prettySize'
  | 'childTestimonialsYaml___avatar___publicURL'
  | 'childTestimonialsYaml___avatar___rdev'
  | 'childTestimonialsYaml___avatar___relativeDirectory'
  | 'childTestimonialsYaml___avatar___relativePath'
  | 'childTestimonialsYaml___avatar___root'
  | 'childTestimonialsYaml___avatar___size'
  | 'childTestimonialsYaml___avatar___sourceInstanceName'
  | 'childTestimonialsYaml___avatar___uid'
  | 'childTestimonialsYaml___children'
  | 'childTestimonialsYaml___children___children'
  | 'childTestimonialsYaml___children___children___children'
  | 'childTestimonialsYaml___children___children___id'
  | 'childTestimonialsYaml___children___id'
  | 'childTestimonialsYaml___children___internal___content'
  | 'childTestimonialsYaml___children___internal___contentDigest'
  | 'childTestimonialsYaml___children___internal___description'
  | 'childTestimonialsYaml___children___internal___fieldOwners'
  | 'childTestimonialsYaml___children___internal___ignoreType'
  | 'childTestimonialsYaml___children___internal___mediaType'
  | 'childTestimonialsYaml___children___internal___owner'
  | 'childTestimonialsYaml___children___internal___type'
  | 'childTestimonialsYaml___children___parent___children'
  | 'childTestimonialsYaml___children___parent___id'
  | 'childTestimonialsYaml___excursion___name'
  | 'childTestimonialsYaml___fullName'
  | 'childTestimonialsYaml___id'
  | 'childTestimonialsYaml___internal___content'
  | 'childTestimonialsYaml___internal___contentDigest'
  | 'childTestimonialsYaml___internal___description'
  | 'childTestimonialsYaml___internal___fieldOwners'
  | 'childTestimonialsYaml___internal___ignoreType'
  | 'childTestimonialsYaml___internal___mediaType'
  | 'childTestimonialsYaml___internal___owner'
  | 'childTestimonialsYaml___internal___type'
  | 'childTestimonialsYaml___parent___children'
  | 'childTestimonialsYaml___parent___children___children'
  | 'childTestimonialsYaml___parent___children___id'
  | 'childTestimonialsYaml___parent___id'
  | 'childTestimonialsYaml___parent___internal___content'
  | 'childTestimonialsYaml___parent___internal___contentDigest'
  | 'childTestimonialsYaml___parent___internal___description'
  | 'childTestimonialsYaml___parent___internal___fieldOwners'
  | 'childTestimonialsYaml___parent___internal___ignoreType'
  | 'childTestimonialsYaml___parent___internal___mediaType'
  | 'childTestimonialsYaml___parent___internal___owner'
  | 'childTestimonialsYaml___parent___internal___type'
  | 'childTestimonialsYaml___parent___parent___children'
  | 'childTestimonialsYaml___parent___parent___id'
  | 'childTestimonialsYaml___text'
  | 'children'
  | 'childrenGalleryYaml'
  | 'childrenGalleryYaml___children'
  | 'childrenGalleryYaml___children___children'
  | 'childrenGalleryYaml___children___children___children'
  | 'childrenGalleryYaml___children___children___id'
  | 'childrenGalleryYaml___children___id'
  | 'childrenGalleryYaml___children___internal___content'
  | 'childrenGalleryYaml___children___internal___contentDigest'
  | 'childrenGalleryYaml___children___internal___description'
  | 'childrenGalleryYaml___children___internal___fieldOwners'
  | 'childrenGalleryYaml___children___internal___ignoreType'
  | 'childrenGalleryYaml___children___internal___mediaType'
  | 'childrenGalleryYaml___children___internal___owner'
  | 'childrenGalleryYaml___children___internal___type'
  | 'childrenGalleryYaml___children___parent___children'
  | 'childrenGalleryYaml___children___parent___id'
  | 'childrenGalleryYaml___id'
  | 'childrenGalleryYaml___image___absolutePath'
  | 'childrenGalleryYaml___image___accessTime'
  | 'childrenGalleryYaml___image___atime'
  | 'childrenGalleryYaml___image___atimeMs'
  | 'childrenGalleryYaml___image___base'
  | 'childrenGalleryYaml___image___birthTime'
  | 'childrenGalleryYaml___image___birthtime'
  | 'childrenGalleryYaml___image___birthtimeMs'
  | 'childrenGalleryYaml___image___blksize'
  | 'childrenGalleryYaml___image___blocks'
  | 'childrenGalleryYaml___image___changeTime'
  | 'childrenGalleryYaml___image___childGalleryYaml___children'
  | 'childrenGalleryYaml___image___childGalleryYaml___id'
  | 'childrenGalleryYaml___image___childGalleryYaml___title'
  | 'childrenGalleryYaml___image___childImageSharp___children'
  | 'childrenGalleryYaml___image___childImageSharp___gatsbyImageData'
  | 'childrenGalleryYaml___image___childImageSharp___id'
  | 'childrenGalleryYaml___image___childMdx___body'
  | 'childrenGalleryYaml___image___childMdx___children'
  | 'childrenGalleryYaml___image___childMdx___excerpt'
  | 'childrenGalleryYaml___image___childMdx___fileAbsolutePath'
  | 'childrenGalleryYaml___image___childMdx___headings'
  | 'childrenGalleryYaml___image___childMdx___html'
  | 'childrenGalleryYaml___image___childMdx___id'
  | 'childrenGalleryYaml___image___childMdx___mdxAST'
  | 'childrenGalleryYaml___image___childMdx___rawBody'
  | 'childrenGalleryYaml___image___childMdx___slug'
  | 'childrenGalleryYaml___image___childMdx___tableOfContents'
  | 'childrenGalleryYaml___image___childMdx___timeToRead'
  | 'childrenGalleryYaml___image___childTestimonialsYaml___children'
  | 'childrenGalleryYaml___image___childTestimonialsYaml___fullName'
  | 'childrenGalleryYaml___image___childTestimonialsYaml___id'
  | 'childrenGalleryYaml___image___childTestimonialsYaml___text'
  | 'childrenGalleryYaml___image___children'
  | 'childrenGalleryYaml___image___childrenGalleryYaml'
  | 'childrenGalleryYaml___image___childrenGalleryYaml___children'
  | 'childrenGalleryYaml___image___childrenGalleryYaml___id'
  | 'childrenGalleryYaml___image___childrenGalleryYaml___title'
  | 'childrenGalleryYaml___image___childrenImageSharp'
  | 'childrenGalleryYaml___image___childrenImageSharp___children'
  | 'childrenGalleryYaml___image___childrenImageSharp___gatsbyImageData'
  | 'childrenGalleryYaml___image___childrenImageSharp___id'
  | 'childrenGalleryYaml___image___childrenMdx'
  | 'childrenGalleryYaml___image___childrenMdx___body'
  | 'childrenGalleryYaml___image___childrenMdx___children'
  | 'childrenGalleryYaml___image___childrenMdx___excerpt'
  | 'childrenGalleryYaml___image___childrenMdx___fileAbsolutePath'
  | 'childrenGalleryYaml___image___childrenMdx___headings'
  | 'childrenGalleryYaml___image___childrenMdx___html'
  | 'childrenGalleryYaml___image___childrenMdx___id'
  | 'childrenGalleryYaml___image___childrenMdx___mdxAST'
  | 'childrenGalleryYaml___image___childrenMdx___rawBody'
  | 'childrenGalleryYaml___image___childrenMdx___slug'
  | 'childrenGalleryYaml___image___childrenMdx___tableOfContents'
  | 'childrenGalleryYaml___image___childrenMdx___timeToRead'
  | 'childrenGalleryYaml___image___childrenTestimonialsYaml'
  | 'childrenGalleryYaml___image___childrenTestimonialsYaml___children'
  | 'childrenGalleryYaml___image___childrenTestimonialsYaml___fullName'
  | 'childrenGalleryYaml___image___childrenTestimonialsYaml___id'
  | 'childrenGalleryYaml___image___childrenTestimonialsYaml___text'
  | 'childrenGalleryYaml___image___children___children'
  | 'childrenGalleryYaml___image___children___id'
  | 'childrenGalleryYaml___image___ctime'
  | 'childrenGalleryYaml___image___ctimeMs'
  | 'childrenGalleryYaml___image___dev'
  | 'childrenGalleryYaml___image___dir'
  | 'childrenGalleryYaml___image___ext'
  | 'childrenGalleryYaml___image___extension'
  | 'childrenGalleryYaml___image___gid'
  | 'childrenGalleryYaml___image___id'
  | 'childrenGalleryYaml___image___ino'
  | 'childrenGalleryYaml___image___internal___content'
  | 'childrenGalleryYaml___image___internal___contentDigest'
  | 'childrenGalleryYaml___image___internal___description'
  | 'childrenGalleryYaml___image___internal___fieldOwners'
  | 'childrenGalleryYaml___image___internal___ignoreType'
  | 'childrenGalleryYaml___image___internal___mediaType'
  | 'childrenGalleryYaml___image___internal___owner'
  | 'childrenGalleryYaml___image___internal___type'
  | 'childrenGalleryYaml___image___mode'
  | 'childrenGalleryYaml___image___modifiedTime'
  | 'childrenGalleryYaml___image___mtime'
  | 'childrenGalleryYaml___image___mtimeMs'
  | 'childrenGalleryYaml___image___name'
  | 'childrenGalleryYaml___image___nlink'
  | 'childrenGalleryYaml___image___parent___children'
  | 'childrenGalleryYaml___image___parent___id'
  | 'childrenGalleryYaml___image___prettySize'
  | 'childrenGalleryYaml___image___publicURL'
  | 'childrenGalleryYaml___image___rdev'
  | 'childrenGalleryYaml___image___relativeDirectory'
  | 'childrenGalleryYaml___image___relativePath'
  | 'childrenGalleryYaml___image___root'
  | 'childrenGalleryYaml___image___size'
  | 'childrenGalleryYaml___image___sourceInstanceName'
  | 'childrenGalleryYaml___image___uid'
  | 'childrenGalleryYaml___internal___content'
  | 'childrenGalleryYaml___internal___contentDigest'
  | 'childrenGalleryYaml___internal___description'
  | 'childrenGalleryYaml___internal___fieldOwners'
  | 'childrenGalleryYaml___internal___ignoreType'
  | 'childrenGalleryYaml___internal___mediaType'
  | 'childrenGalleryYaml___internal___owner'
  | 'childrenGalleryYaml___internal___type'
  | 'childrenGalleryYaml___parent___children'
  | 'childrenGalleryYaml___parent___children___children'
  | 'childrenGalleryYaml___parent___children___id'
  | 'childrenGalleryYaml___parent___id'
  | 'childrenGalleryYaml___parent___internal___content'
  | 'childrenGalleryYaml___parent___internal___contentDigest'
  | 'childrenGalleryYaml___parent___internal___description'
  | 'childrenGalleryYaml___parent___internal___fieldOwners'
  | 'childrenGalleryYaml___parent___internal___ignoreType'
  | 'childrenGalleryYaml___parent___internal___mediaType'
  | 'childrenGalleryYaml___parent___internal___owner'
  | 'childrenGalleryYaml___parent___internal___type'
  | 'childrenGalleryYaml___parent___parent___children'
  | 'childrenGalleryYaml___parent___parent___id'
  | 'childrenGalleryYaml___title'
  | 'childrenImageSharp'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenMdx'
  | 'childrenMdx___body'
  | 'childrenMdx___children'
  | 'childrenMdx___children___children'
  | 'childrenMdx___children___children___children'
  | 'childrenMdx___children___children___id'
  | 'childrenMdx___children___id'
  | 'childrenMdx___children___internal___content'
  | 'childrenMdx___children___internal___contentDigest'
  | 'childrenMdx___children___internal___description'
  | 'childrenMdx___children___internal___fieldOwners'
  | 'childrenMdx___children___internal___ignoreType'
  | 'childrenMdx___children___internal___mediaType'
  | 'childrenMdx___children___internal___owner'
  | 'childrenMdx___children___internal___type'
  | 'childrenMdx___children___parent___children'
  | 'childrenMdx___children___parent___id'
  | 'childrenMdx___excerpt'
  | 'childrenMdx___fields___slug'
  | 'childrenMdx___fileAbsolutePath'
  | 'childrenMdx___frontmatter___coverImage___absolutePath'
  | 'childrenMdx___frontmatter___coverImage___accessTime'
  | 'childrenMdx___frontmatter___coverImage___atime'
  | 'childrenMdx___frontmatter___coverImage___atimeMs'
  | 'childrenMdx___frontmatter___coverImage___base'
  | 'childrenMdx___frontmatter___coverImage___birthTime'
  | 'childrenMdx___frontmatter___coverImage___birthtime'
  | 'childrenMdx___frontmatter___coverImage___birthtimeMs'
  | 'childrenMdx___frontmatter___coverImage___blksize'
  | 'childrenMdx___frontmatter___coverImage___blocks'
  | 'childrenMdx___frontmatter___coverImage___changeTime'
  | 'childrenMdx___frontmatter___coverImage___children'
  | 'childrenMdx___frontmatter___coverImage___childrenGalleryYaml'
  | 'childrenMdx___frontmatter___coverImage___childrenImageSharp'
  | 'childrenMdx___frontmatter___coverImage___childrenMdx'
  | 'childrenMdx___frontmatter___coverImage___childrenTestimonialsYaml'
  | 'childrenMdx___frontmatter___coverImage___ctime'
  | 'childrenMdx___frontmatter___coverImage___ctimeMs'
  | 'childrenMdx___frontmatter___coverImage___dev'
  | 'childrenMdx___frontmatter___coverImage___dir'
  | 'childrenMdx___frontmatter___coverImage___ext'
  | 'childrenMdx___frontmatter___coverImage___extension'
  | 'childrenMdx___frontmatter___coverImage___gid'
  | 'childrenMdx___frontmatter___coverImage___id'
  | 'childrenMdx___frontmatter___coverImage___ino'
  | 'childrenMdx___frontmatter___coverImage___mode'
  | 'childrenMdx___frontmatter___coverImage___modifiedTime'
  | 'childrenMdx___frontmatter___coverImage___mtime'
  | 'childrenMdx___frontmatter___coverImage___mtimeMs'
  | 'childrenMdx___frontmatter___coverImage___name'
  | 'childrenMdx___frontmatter___coverImage___nlink'
  | 'childrenMdx___frontmatter___coverImage___prettySize'
  | 'childrenMdx___frontmatter___coverImage___publicURL'
  | 'childrenMdx___frontmatter___coverImage___rdev'
  | 'childrenMdx___frontmatter___coverImage___relativeDirectory'
  | 'childrenMdx___frontmatter___coverImage___relativePath'
  | 'childrenMdx___frontmatter___coverImage___root'
  | 'childrenMdx___frontmatter___coverImage___size'
  | 'childrenMdx___frontmatter___coverImage___sourceInstanceName'
  | 'childrenMdx___frontmatter___coverImage___uid'
  | 'childrenMdx___frontmatter___createdAt'
  | 'childrenMdx___frontmatter___description'
  | 'childrenMdx___frontmatter___duration'
  | 'childrenMdx___frontmatter___gallery'
  | 'childrenMdx___frontmatter___gallery___absolutePath'
  | 'childrenMdx___frontmatter___gallery___accessTime'
  | 'childrenMdx___frontmatter___gallery___atime'
  | 'childrenMdx___frontmatter___gallery___atimeMs'
  | 'childrenMdx___frontmatter___gallery___base'
  | 'childrenMdx___frontmatter___gallery___birthTime'
  | 'childrenMdx___frontmatter___gallery___birthtime'
  | 'childrenMdx___frontmatter___gallery___birthtimeMs'
  | 'childrenMdx___frontmatter___gallery___blksize'
  | 'childrenMdx___frontmatter___gallery___blocks'
  | 'childrenMdx___frontmatter___gallery___changeTime'
  | 'childrenMdx___frontmatter___gallery___children'
  | 'childrenMdx___frontmatter___gallery___childrenGalleryYaml'
  | 'childrenMdx___frontmatter___gallery___childrenImageSharp'
  | 'childrenMdx___frontmatter___gallery___childrenMdx'
  | 'childrenMdx___frontmatter___gallery___childrenTestimonialsYaml'
  | 'childrenMdx___frontmatter___gallery___ctime'
  | 'childrenMdx___frontmatter___gallery___ctimeMs'
  | 'childrenMdx___frontmatter___gallery___dev'
  | 'childrenMdx___frontmatter___gallery___dir'
  | 'childrenMdx___frontmatter___gallery___ext'
  | 'childrenMdx___frontmatter___gallery___extension'
  | 'childrenMdx___frontmatter___gallery___gid'
  | 'childrenMdx___frontmatter___gallery___id'
  | 'childrenMdx___frontmatter___gallery___ino'
  | 'childrenMdx___frontmatter___gallery___mode'
  | 'childrenMdx___frontmatter___gallery___modifiedTime'
  | 'childrenMdx___frontmatter___gallery___mtime'
  | 'childrenMdx___frontmatter___gallery___mtimeMs'
  | 'childrenMdx___frontmatter___gallery___name'
  | 'childrenMdx___frontmatter___gallery___nlink'
  | 'childrenMdx___frontmatter___gallery___prettySize'
  | 'childrenMdx___frontmatter___gallery___publicURL'
  | 'childrenMdx___frontmatter___gallery___rdev'
  | 'childrenMdx___frontmatter___gallery___relativeDirectory'
  | 'childrenMdx___frontmatter___gallery___relativePath'
  | 'childrenMdx___frontmatter___gallery___root'
  | 'childrenMdx___frontmatter___gallery___size'
  | 'childrenMdx___frontmatter___gallery___sourceInstanceName'
  | 'childrenMdx___frontmatter___gallery___uid'
  | 'childrenMdx___frontmatter___price'
  | 'childrenMdx___frontmatter___template'
  | 'childrenMdx___frontmatter___title'
  | 'childrenMdx___headings'
  | 'childrenMdx___headings___depth'
  | 'childrenMdx___headings___value'
  | 'childrenMdx___html'
  | 'childrenMdx___id'
  | 'childrenMdx___internal___content'
  | 'childrenMdx___internal___contentDigest'
  | 'childrenMdx___internal___description'
  | 'childrenMdx___internal___fieldOwners'
  | 'childrenMdx___internal___ignoreType'
  | 'childrenMdx___internal___mediaType'
  | 'childrenMdx___internal___owner'
  | 'childrenMdx___internal___type'
  | 'childrenMdx___mdxAST'
  | 'childrenMdx___parent___children'
  | 'childrenMdx___parent___children___children'
  | 'childrenMdx___parent___children___id'
  | 'childrenMdx___parent___id'
  | 'childrenMdx___parent___internal___content'
  | 'childrenMdx___parent___internal___contentDigest'
  | 'childrenMdx___parent___internal___description'
  | 'childrenMdx___parent___internal___fieldOwners'
  | 'childrenMdx___parent___internal___ignoreType'
  | 'childrenMdx___parent___internal___mediaType'
  | 'childrenMdx___parent___internal___owner'
  | 'childrenMdx___parent___internal___type'
  | 'childrenMdx___parent___parent___children'
  | 'childrenMdx___parent___parent___id'
  | 'childrenMdx___rawBody'
  | 'childrenMdx___slug'
  | 'childrenMdx___tableOfContents'
  | 'childrenMdx___timeToRead'
  | 'childrenMdx___wordCount___paragraphs'
  | 'childrenMdx___wordCount___sentences'
  | 'childrenMdx___wordCount___words'
  | 'childrenTestimonialsYaml'
  | 'childrenTestimonialsYaml___avatar___absolutePath'
  | 'childrenTestimonialsYaml___avatar___accessTime'
  | 'childrenTestimonialsYaml___avatar___atime'
  | 'childrenTestimonialsYaml___avatar___atimeMs'
  | 'childrenTestimonialsYaml___avatar___base'
  | 'childrenTestimonialsYaml___avatar___birthTime'
  | 'childrenTestimonialsYaml___avatar___birthtime'
  | 'childrenTestimonialsYaml___avatar___birthtimeMs'
  | 'childrenTestimonialsYaml___avatar___blksize'
  | 'childrenTestimonialsYaml___avatar___blocks'
  | 'childrenTestimonialsYaml___avatar___changeTime'
  | 'childrenTestimonialsYaml___avatar___childGalleryYaml___children'
  | 'childrenTestimonialsYaml___avatar___childGalleryYaml___id'
  | 'childrenTestimonialsYaml___avatar___childGalleryYaml___title'
  | 'childrenTestimonialsYaml___avatar___childImageSharp___children'
  | 'childrenTestimonialsYaml___avatar___childImageSharp___gatsbyImageData'
  | 'childrenTestimonialsYaml___avatar___childImageSharp___id'
  | 'childrenTestimonialsYaml___avatar___childMdx___body'
  | 'childrenTestimonialsYaml___avatar___childMdx___children'
  | 'childrenTestimonialsYaml___avatar___childMdx___excerpt'
  | 'childrenTestimonialsYaml___avatar___childMdx___fileAbsolutePath'
  | 'childrenTestimonialsYaml___avatar___childMdx___headings'
  | 'childrenTestimonialsYaml___avatar___childMdx___html'
  | 'childrenTestimonialsYaml___avatar___childMdx___id'
  | 'childrenTestimonialsYaml___avatar___childMdx___mdxAST'
  | 'childrenTestimonialsYaml___avatar___childMdx___rawBody'
  | 'childrenTestimonialsYaml___avatar___childMdx___slug'
  | 'childrenTestimonialsYaml___avatar___childMdx___tableOfContents'
  | 'childrenTestimonialsYaml___avatar___childMdx___timeToRead'
  | 'childrenTestimonialsYaml___avatar___childTestimonialsYaml___children'
  | 'childrenTestimonialsYaml___avatar___childTestimonialsYaml___fullName'
  | 'childrenTestimonialsYaml___avatar___childTestimonialsYaml___id'
  | 'childrenTestimonialsYaml___avatar___childTestimonialsYaml___text'
  | 'childrenTestimonialsYaml___avatar___children'
  | 'childrenTestimonialsYaml___avatar___childrenGalleryYaml'
  | 'childrenTestimonialsYaml___avatar___childrenGalleryYaml___children'
  | 'childrenTestimonialsYaml___avatar___childrenGalleryYaml___id'
  | 'childrenTestimonialsYaml___avatar___childrenGalleryYaml___title'
  | 'childrenTestimonialsYaml___avatar___childrenImageSharp'
  | 'childrenTestimonialsYaml___avatar___childrenImageSharp___children'
  | 'childrenTestimonialsYaml___avatar___childrenImageSharp___gatsbyImageData'
  | 'childrenTestimonialsYaml___avatar___childrenImageSharp___id'
  | 'childrenTestimonialsYaml___avatar___childrenMdx'
  | 'childrenTestimonialsYaml___avatar___childrenMdx___body'
  | 'childrenTestimonialsYaml___avatar___childrenMdx___children'
  | 'childrenTestimonialsYaml___avatar___childrenMdx___excerpt'
  | 'childrenTestimonialsYaml___avatar___childrenMdx___fileAbsolutePath'
  | 'childrenTestimonialsYaml___avatar___childrenMdx___headings'
  | 'childrenTestimonialsYaml___avatar___childrenMdx___html'
  | 'childrenTestimonialsYaml___avatar___childrenMdx___id'
  | 'childrenTestimonialsYaml___avatar___childrenMdx___mdxAST'
  | 'childrenTestimonialsYaml___avatar___childrenMdx___rawBody'
  | 'childrenTestimonialsYaml___avatar___childrenMdx___slug'
  | 'childrenTestimonialsYaml___avatar___childrenMdx___tableOfContents'
  | 'childrenTestimonialsYaml___avatar___childrenMdx___timeToRead'
  | 'childrenTestimonialsYaml___avatar___childrenTestimonialsYaml'
  | 'childrenTestimonialsYaml___avatar___childrenTestimonialsYaml___children'
  | 'childrenTestimonialsYaml___avatar___childrenTestimonialsYaml___fullName'
  | 'childrenTestimonialsYaml___avatar___childrenTestimonialsYaml___id'
  | 'childrenTestimonialsYaml___avatar___childrenTestimonialsYaml___text'
  | 'childrenTestimonialsYaml___avatar___children___children'
  | 'childrenTestimonialsYaml___avatar___children___id'
  | 'childrenTestimonialsYaml___avatar___ctime'
  | 'childrenTestimonialsYaml___avatar___ctimeMs'
  | 'childrenTestimonialsYaml___avatar___dev'
  | 'childrenTestimonialsYaml___avatar___dir'
  | 'childrenTestimonialsYaml___avatar___ext'
  | 'childrenTestimonialsYaml___avatar___extension'
  | 'childrenTestimonialsYaml___avatar___gid'
  | 'childrenTestimonialsYaml___avatar___id'
  | 'childrenTestimonialsYaml___avatar___ino'
  | 'childrenTestimonialsYaml___avatar___internal___content'
  | 'childrenTestimonialsYaml___avatar___internal___contentDigest'
  | 'childrenTestimonialsYaml___avatar___internal___description'
  | 'childrenTestimonialsYaml___avatar___internal___fieldOwners'
  | 'childrenTestimonialsYaml___avatar___internal___ignoreType'
  | 'childrenTestimonialsYaml___avatar___internal___mediaType'
  | 'childrenTestimonialsYaml___avatar___internal___owner'
  | 'childrenTestimonialsYaml___avatar___internal___type'
  | 'childrenTestimonialsYaml___avatar___mode'
  | 'childrenTestimonialsYaml___avatar___modifiedTime'
  | 'childrenTestimonialsYaml___avatar___mtime'
  | 'childrenTestimonialsYaml___avatar___mtimeMs'
  | 'childrenTestimonialsYaml___avatar___name'
  | 'childrenTestimonialsYaml___avatar___nlink'
  | 'childrenTestimonialsYaml___avatar___parent___children'
  | 'childrenTestimonialsYaml___avatar___parent___id'
  | 'childrenTestimonialsYaml___avatar___prettySize'
  | 'childrenTestimonialsYaml___avatar___publicURL'
  | 'childrenTestimonialsYaml___avatar___rdev'
  | 'childrenTestimonialsYaml___avatar___relativeDirectory'
  | 'childrenTestimonialsYaml___avatar___relativePath'
  | 'childrenTestimonialsYaml___avatar___root'
  | 'childrenTestimonialsYaml___avatar___size'
  | 'childrenTestimonialsYaml___avatar___sourceInstanceName'
  | 'childrenTestimonialsYaml___avatar___uid'
  | 'childrenTestimonialsYaml___children'
  | 'childrenTestimonialsYaml___children___children'
  | 'childrenTestimonialsYaml___children___children___children'
  | 'childrenTestimonialsYaml___children___children___id'
  | 'childrenTestimonialsYaml___children___id'
  | 'childrenTestimonialsYaml___children___internal___content'
  | 'childrenTestimonialsYaml___children___internal___contentDigest'
  | 'childrenTestimonialsYaml___children___internal___description'
  | 'childrenTestimonialsYaml___children___internal___fieldOwners'
  | 'childrenTestimonialsYaml___children___internal___ignoreType'
  | 'childrenTestimonialsYaml___children___internal___mediaType'
  | 'childrenTestimonialsYaml___children___internal___owner'
  | 'childrenTestimonialsYaml___children___internal___type'
  | 'childrenTestimonialsYaml___children___parent___children'
  | 'childrenTestimonialsYaml___children___parent___id'
  | 'childrenTestimonialsYaml___excursion___name'
  | 'childrenTestimonialsYaml___fullName'
  | 'childrenTestimonialsYaml___id'
  | 'childrenTestimonialsYaml___internal___content'
  | 'childrenTestimonialsYaml___internal___contentDigest'
  | 'childrenTestimonialsYaml___internal___description'
  | 'childrenTestimonialsYaml___internal___fieldOwners'
  | 'childrenTestimonialsYaml___internal___ignoreType'
  | 'childrenTestimonialsYaml___internal___mediaType'
  | 'childrenTestimonialsYaml___internal___owner'
  | 'childrenTestimonialsYaml___internal___type'
  | 'childrenTestimonialsYaml___parent___children'
  | 'childrenTestimonialsYaml___parent___children___children'
  | 'childrenTestimonialsYaml___parent___children___id'
  | 'childrenTestimonialsYaml___parent___id'
  | 'childrenTestimonialsYaml___parent___internal___content'
  | 'childrenTestimonialsYaml___parent___internal___contentDigest'
  | 'childrenTestimonialsYaml___parent___internal___description'
  | 'childrenTestimonialsYaml___parent___internal___fieldOwners'
  | 'childrenTestimonialsYaml___parent___internal___ignoreType'
  | 'childrenTestimonialsYaml___parent___internal___mediaType'
  | 'childrenTestimonialsYaml___parent___internal___owner'
  | 'childrenTestimonialsYaml___parent___internal___type'
  | 'childrenTestimonialsYaml___parent___parent___children'
  | 'childrenTestimonialsYaml___parent___parent___id'
  | 'childrenTestimonialsYaml___text'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'ctime'
  | 'ctimeMs'
  | 'dev'
  | 'dir'
  | 'ext'
  | 'extension'
  | 'gid'
  | 'id'
  | 'ino'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'mode'
  | 'modifiedTime'
  | 'mtime'
  | 'mtimeMs'
  | 'name'
  | 'nlink'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'prettySize'
  | 'publicURL'
  | 'rdev'
  | 'relativeDirectory'
  | 'relativePath'
  | 'root'
  | 'size'
  | 'sourceInstanceName'
  | 'uid';

export type FileFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childGalleryYaml?: InputMaybe<GalleryYamlFilterInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childMdx?: InputMaybe<MdxFilterInput>;
  childTestimonialsYaml?: InputMaybe<TestimonialsYamlFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenGalleryYaml?: InputMaybe<GalleryYamlFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childrenMdx?: InputMaybe<MdxFilterListInput>;
  childrenTestimonialsYaml?: InputMaybe<TestimonialsYamlFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type FileFilterListInput = {
  elemMatch?: InputMaybe<FileFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type GalleryYaml = Node & {
  __typename?: 'GalleryYaml';
  children: Array<Node>;
  id: Scalars['ID'];
  image?: Maybe<File>;
  internal: Internal;
  parent?: Maybe<Node>;
  title?: Maybe<Scalars['String']>;
};

export type GalleryYamlConnection = {
  __typename?: 'GalleryYamlConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GalleryYamlEdge>;
  group: Array<GalleryYamlGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GalleryYaml>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type GalleryYamlConnectionDistinctArgs = {
  field: GalleryYamlFieldsEnum;
};

export type GalleryYamlConnectionGroupArgs = {
  field: GalleryYamlFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type GalleryYamlConnectionMaxArgs = {
  field: GalleryYamlFieldsEnum;
};

export type GalleryYamlConnectionMinArgs = {
  field: GalleryYamlFieldsEnum;
};

export type GalleryYamlConnectionSumArgs = {
  field: GalleryYamlFieldsEnum;
};

export type GalleryYamlEdge = {
  __typename?: 'GalleryYamlEdge';
  next?: Maybe<GalleryYaml>;
  node: GalleryYaml;
  previous?: Maybe<GalleryYaml>;
};

export type GalleryYamlFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'image___absolutePath'
  | 'image___accessTime'
  | 'image___atime'
  | 'image___atimeMs'
  | 'image___base'
  | 'image___birthTime'
  | 'image___birthtime'
  | 'image___birthtimeMs'
  | 'image___blksize'
  | 'image___blocks'
  | 'image___changeTime'
  | 'image___childGalleryYaml___children'
  | 'image___childGalleryYaml___children___children'
  | 'image___childGalleryYaml___children___id'
  | 'image___childGalleryYaml___id'
  | 'image___childGalleryYaml___image___absolutePath'
  | 'image___childGalleryYaml___image___accessTime'
  | 'image___childGalleryYaml___image___atime'
  | 'image___childGalleryYaml___image___atimeMs'
  | 'image___childGalleryYaml___image___base'
  | 'image___childGalleryYaml___image___birthTime'
  | 'image___childGalleryYaml___image___birthtime'
  | 'image___childGalleryYaml___image___birthtimeMs'
  | 'image___childGalleryYaml___image___blksize'
  | 'image___childGalleryYaml___image___blocks'
  | 'image___childGalleryYaml___image___changeTime'
  | 'image___childGalleryYaml___image___children'
  | 'image___childGalleryYaml___image___childrenGalleryYaml'
  | 'image___childGalleryYaml___image___childrenImageSharp'
  | 'image___childGalleryYaml___image___childrenMdx'
  | 'image___childGalleryYaml___image___childrenTestimonialsYaml'
  | 'image___childGalleryYaml___image___ctime'
  | 'image___childGalleryYaml___image___ctimeMs'
  | 'image___childGalleryYaml___image___dev'
  | 'image___childGalleryYaml___image___dir'
  | 'image___childGalleryYaml___image___ext'
  | 'image___childGalleryYaml___image___extension'
  | 'image___childGalleryYaml___image___gid'
  | 'image___childGalleryYaml___image___id'
  | 'image___childGalleryYaml___image___ino'
  | 'image___childGalleryYaml___image___mode'
  | 'image___childGalleryYaml___image___modifiedTime'
  | 'image___childGalleryYaml___image___mtime'
  | 'image___childGalleryYaml___image___mtimeMs'
  | 'image___childGalleryYaml___image___name'
  | 'image___childGalleryYaml___image___nlink'
  | 'image___childGalleryYaml___image___prettySize'
  | 'image___childGalleryYaml___image___publicURL'
  | 'image___childGalleryYaml___image___rdev'
  | 'image___childGalleryYaml___image___relativeDirectory'
  | 'image___childGalleryYaml___image___relativePath'
  | 'image___childGalleryYaml___image___root'
  | 'image___childGalleryYaml___image___size'
  | 'image___childGalleryYaml___image___sourceInstanceName'
  | 'image___childGalleryYaml___image___uid'
  | 'image___childGalleryYaml___internal___content'
  | 'image___childGalleryYaml___internal___contentDigest'
  | 'image___childGalleryYaml___internal___description'
  | 'image___childGalleryYaml___internal___fieldOwners'
  | 'image___childGalleryYaml___internal___ignoreType'
  | 'image___childGalleryYaml___internal___mediaType'
  | 'image___childGalleryYaml___internal___owner'
  | 'image___childGalleryYaml___internal___type'
  | 'image___childGalleryYaml___parent___children'
  | 'image___childGalleryYaml___parent___id'
  | 'image___childGalleryYaml___title'
  | 'image___childImageSharp___children'
  | 'image___childImageSharp___children___children'
  | 'image___childImageSharp___children___id'
  | 'image___childImageSharp___fixed___aspectRatio'
  | 'image___childImageSharp___fixed___base64'
  | 'image___childImageSharp___fixed___height'
  | 'image___childImageSharp___fixed___originalName'
  | 'image___childImageSharp___fixed___src'
  | 'image___childImageSharp___fixed___srcSet'
  | 'image___childImageSharp___fixed___srcSetWebp'
  | 'image___childImageSharp___fixed___srcWebp'
  | 'image___childImageSharp___fixed___tracedSVG'
  | 'image___childImageSharp___fixed___width'
  | 'image___childImageSharp___fluid___aspectRatio'
  | 'image___childImageSharp___fluid___base64'
  | 'image___childImageSharp___fluid___originalImg'
  | 'image___childImageSharp___fluid___originalName'
  | 'image___childImageSharp___fluid___presentationHeight'
  | 'image___childImageSharp___fluid___presentationWidth'
  | 'image___childImageSharp___fluid___sizes'
  | 'image___childImageSharp___fluid___src'
  | 'image___childImageSharp___fluid___srcSet'
  | 'image___childImageSharp___fluid___srcSetWebp'
  | 'image___childImageSharp___fluid___srcWebp'
  | 'image___childImageSharp___fluid___tracedSVG'
  | 'image___childImageSharp___gatsbyImageData'
  | 'image___childImageSharp___id'
  | 'image___childImageSharp___internal___content'
  | 'image___childImageSharp___internal___contentDigest'
  | 'image___childImageSharp___internal___description'
  | 'image___childImageSharp___internal___fieldOwners'
  | 'image___childImageSharp___internal___ignoreType'
  | 'image___childImageSharp___internal___mediaType'
  | 'image___childImageSharp___internal___owner'
  | 'image___childImageSharp___internal___type'
  | 'image___childImageSharp___original___height'
  | 'image___childImageSharp___original___src'
  | 'image___childImageSharp___original___width'
  | 'image___childImageSharp___parent___children'
  | 'image___childImageSharp___parent___id'
  | 'image___childImageSharp___resize___aspectRatio'
  | 'image___childImageSharp___resize___height'
  | 'image___childImageSharp___resize___originalName'
  | 'image___childImageSharp___resize___src'
  | 'image___childImageSharp___resize___tracedSVG'
  | 'image___childImageSharp___resize___width'
  | 'image___childMdx___body'
  | 'image___childMdx___children'
  | 'image___childMdx___children___children'
  | 'image___childMdx___children___id'
  | 'image___childMdx___excerpt'
  | 'image___childMdx___fields___slug'
  | 'image___childMdx___fileAbsolutePath'
  | 'image___childMdx___frontmatter___createdAt'
  | 'image___childMdx___frontmatter___description'
  | 'image___childMdx___frontmatter___duration'
  | 'image___childMdx___frontmatter___gallery'
  | 'image___childMdx___frontmatter___price'
  | 'image___childMdx___frontmatter___template'
  | 'image___childMdx___frontmatter___title'
  | 'image___childMdx___headings'
  | 'image___childMdx___headings___depth'
  | 'image___childMdx___headings___value'
  | 'image___childMdx___html'
  | 'image___childMdx___id'
  | 'image___childMdx___internal___content'
  | 'image___childMdx___internal___contentDigest'
  | 'image___childMdx___internal___description'
  | 'image___childMdx___internal___fieldOwners'
  | 'image___childMdx___internal___ignoreType'
  | 'image___childMdx___internal___mediaType'
  | 'image___childMdx___internal___owner'
  | 'image___childMdx___internal___type'
  | 'image___childMdx___mdxAST'
  | 'image___childMdx___parent___children'
  | 'image___childMdx___parent___id'
  | 'image___childMdx___rawBody'
  | 'image___childMdx___slug'
  | 'image___childMdx___tableOfContents'
  | 'image___childMdx___timeToRead'
  | 'image___childMdx___wordCount___paragraphs'
  | 'image___childMdx___wordCount___sentences'
  | 'image___childMdx___wordCount___words'
  | 'image___childTestimonialsYaml___avatar___absolutePath'
  | 'image___childTestimonialsYaml___avatar___accessTime'
  | 'image___childTestimonialsYaml___avatar___atime'
  | 'image___childTestimonialsYaml___avatar___atimeMs'
  | 'image___childTestimonialsYaml___avatar___base'
  | 'image___childTestimonialsYaml___avatar___birthTime'
  | 'image___childTestimonialsYaml___avatar___birthtime'
  | 'image___childTestimonialsYaml___avatar___birthtimeMs'
  | 'image___childTestimonialsYaml___avatar___blksize'
  | 'image___childTestimonialsYaml___avatar___blocks'
  | 'image___childTestimonialsYaml___avatar___changeTime'
  | 'image___childTestimonialsYaml___avatar___children'
  | 'image___childTestimonialsYaml___avatar___childrenGalleryYaml'
  | 'image___childTestimonialsYaml___avatar___childrenImageSharp'
  | 'image___childTestimonialsYaml___avatar___childrenMdx'
  | 'image___childTestimonialsYaml___avatar___childrenTestimonialsYaml'
  | 'image___childTestimonialsYaml___avatar___ctime'
  | 'image___childTestimonialsYaml___avatar___ctimeMs'
  | 'image___childTestimonialsYaml___avatar___dev'
  | 'image___childTestimonialsYaml___avatar___dir'
  | 'image___childTestimonialsYaml___avatar___ext'
  | 'image___childTestimonialsYaml___avatar___extension'
  | 'image___childTestimonialsYaml___avatar___gid'
  | 'image___childTestimonialsYaml___avatar___id'
  | 'image___childTestimonialsYaml___avatar___ino'
  | 'image___childTestimonialsYaml___avatar___mode'
  | 'image___childTestimonialsYaml___avatar___modifiedTime'
  | 'image___childTestimonialsYaml___avatar___mtime'
  | 'image___childTestimonialsYaml___avatar___mtimeMs'
  | 'image___childTestimonialsYaml___avatar___name'
  | 'image___childTestimonialsYaml___avatar___nlink'
  | 'image___childTestimonialsYaml___avatar___prettySize'
  | 'image___childTestimonialsYaml___avatar___publicURL'
  | 'image___childTestimonialsYaml___avatar___rdev'
  | 'image___childTestimonialsYaml___avatar___relativeDirectory'
  | 'image___childTestimonialsYaml___avatar___relativePath'
  | 'image___childTestimonialsYaml___avatar___root'
  | 'image___childTestimonialsYaml___avatar___size'
  | 'image___childTestimonialsYaml___avatar___sourceInstanceName'
  | 'image___childTestimonialsYaml___avatar___uid'
  | 'image___childTestimonialsYaml___children'
  | 'image___childTestimonialsYaml___children___children'
  | 'image___childTestimonialsYaml___children___id'
  | 'image___childTestimonialsYaml___excursion___name'
  | 'image___childTestimonialsYaml___fullName'
  | 'image___childTestimonialsYaml___id'
  | 'image___childTestimonialsYaml___internal___content'
  | 'image___childTestimonialsYaml___internal___contentDigest'
  | 'image___childTestimonialsYaml___internal___description'
  | 'image___childTestimonialsYaml___internal___fieldOwners'
  | 'image___childTestimonialsYaml___internal___ignoreType'
  | 'image___childTestimonialsYaml___internal___mediaType'
  | 'image___childTestimonialsYaml___internal___owner'
  | 'image___childTestimonialsYaml___internal___type'
  | 'image___childTestimonialsYaml___parent___children'
  | 'image___childTestimonialsYaml___parent___id'
  | 'image___childTestimonialsYaml___text'
  | 'image___children'
  | 'image___childrenGalleryYaml'
  | 'image___childrenGalleryYaml___children'
  | 'image___childrenGalleryYaml___children___children'
  | 'image___childrenGalleryYaml___children___id'
  | 'image___childrenGalleryYaml___id'
  | 'image___childrenGalleryYaml___image___absolutePath'
  | 'image___childrenGalleryYaml___image___accessTime'
  | 'image___childrenGalleryYaml___image___atime'
  | 'image___childrenGalleryYaml___image___atimeMs'
  | 'image___childrenGalleryYaml___image___base'
  | 'image___childrenGalleryYaml___image___birthTime'
  | 'image___childrenGalleryYaml___image___birthtime'
  | 'image___childrenGalleryYaml___image___birthtimeMs'
  | 'image___childrenGalleryYaml___image___blksize'
  | 'image___childrenGalleryYaml___image___blocks'
  | 'image___childrenGalleryYaml___image___changeTime'
  | 'image___childrenGalleryYaml___image___children'
  | 'image___childrenGalleryYaml___image___childrenGalleryYaml'
  | 'image___childrenGalleryYaml___image___childrenImageSharp'
  | 'image___childrenGalleryYaml___image___childrenMdx'
  | 'image___childrenGalleryYaml___image___childrenTestimonialsYaml'
  | 'image___childrenGalleryYaml___image___ctime'
  | 'image___childrenGalleryYaml___image___ctimeMs'
  | 'image___childrenGalleryYaml___image___dev'
  | 'image___childrenGalleryYaml___image___dir'
  | 'image___childrenGalleryYaml___image___ext'
  | 'image___childrenGalleryYaml___image___extension'
  | 'image___childrenGalleryYaml___image___gid'
  | 'image___childrenGalleryYaml___image___id'
  | 'image___childrenGalleryYaml___image___ino'
  | 'image___childrenGalleryYaml___image___mode'
  | 'image___childrenGalleryYaml___image___modifiedTime'
  | 'image___childrenGalleryYaml___image___mtime'
  | 'image___childrenGalleryYaml___image___mtimeMs'
  | 'image___childrenGalleryYaml___image___name'
  | 'image___childrenGalleryYaml___image___nlink'
  | 'image___childrenGalleryYaml___image___prettySize'
  | 'image___childrenGalleryYaml___image___publicURL'
  | 'image___childrenGalleryYaml___image___rdev'
  | 'image___childrenGalleryYaml___image___relativeDirectory'
  | 'image___childrenGalleryYaml___image___relativePath'
  | 'image___childrenGalleryYaml___image___root'
  | 'image___childrenGalleryYaml___image___size'
  | 'image___childrenGalleryYaml___image___sourceInstanceName'
  | 'image___childrenGalleryYaml___image___uid'
  | 'image___childrenGalleryYaml___internal___content'
  | 'image___childrenGalleryYaml___internal___contentDigest'
  | 'image___childrenGalleryYaml___internal___description'
  | 'image___childrenGalleryYaml___internal___fieldOwners'
  | 'image___childrenGalleryYaml___internal___ignoreType'
  | 'image___childrenGalleryYaml___internal___mediaType'
  | 'image___childrenGalleryYaml___internal___owner'
  | 'image___childrenGalleryYaml___internal___type'
  | 'image___childrenGalleryYaml___parent___children'
  | 'image___childrenGalleryYaml___parent___id'
  | 'image___childrenGalleryYaml___title'
  | 'image___childrenImageSharp'
  | 'image___childrenImageSharp___children'
  | 'image___childrenImageSharp___children___children'
  | 'image___childrenImageSharp___children___id'
  | 'image___childrenImageSharp___fixed___aspectRatio'
  | 'image___childrenImageSharp___fixed___base64'
  | 'image___childrenImageSharp___fixed___height'
  | 'image___childrenImageSharp___fixed___originalName'
  | 'image___childrenImageSharp___fixed___src'
  | 'image___childrenImageSharp___fixed___srcSet'
  | 'image___childrenImageSharp___fixed___srcSetWebp'
  | 'image___childrenImageSharp___fixed___srcWebp'
  | 'image___childrenImageSharp___fixed___tracedSVG'
  | 'image___childrenImageSharp___fixed___width'
  | 'image___childrenImageSharp___fluid___aspectRatio'
  | 'image___childrenImageSharp___fluid___base64'
  | 'image___childrenImageSharp___fluid___originalImg'
  | 'image___childrenImageSharp___fluid___originalName'
  | 'image___childrenImageSharp___fluid___presentationHeight'
  | 'image___childrenImageSharp___fluid___presentationWidth'
  | 'image___childrenImageSharp___fluid___sizes'
  | 'image___childrenImageSharp___fluid___src'
  | 'image___childrenImageSharp___fluid___srcSet'
  | 'image___childrenImageSharp___fluid___srcSetWebp'
  | 'image___childrenImageSharp___fluid___srcWebp'
  | 'image___childrenImageSharp___fluid___tracedSVG'
  | 'image___childrenImageSharp___gatsbyImageData'
  | 'image___childrenImageSharp___id'
  | 'image___childrenImageSharp___internal___content'
  | 'image___childrenImageSharp___internal___contentDigest'
  | 'image___childrenImageSharp___internal___description'
  | 'image___childrenImageSharp___internal___fieldOwners'
  | 'image___childrenImageSharp___internal___ignoreType'
  | 'image___childrenImageSharp___internal___mediaType'
  | 'image___childrenImageSharp___internal___owner'
  | 'image___childrenImageSharp___internal___type'
  | 'image___childrenImageSharp___original___height'
  | 'image___childrenImageSharp___original___src'
  | 'image___childrenImageSharp___original___width'
  | 'image___childrenImageSharp___parent___children'
  | 'image___childrenImageSharp___parent___id'
  | 'image___childrenImageSharp___resize___aspectRatio'
  | 'image___childrenImageSharp___resize___height'
  | 'image___childrenImageSharp___resize___originalName'
  | 'image___childrenImageSharp___resize___src'
  | 'image___childrenImageSharp___resize___tracedSVG'
  | 'image___childrenImageSharp___resize___width'
  | 'image___childrenMdx'
  | 'image___childrenMdx___body'
  | 'image___childrenMdx___children'
  | 'image___childrenMdx___children___children'
  | 'image___childrenMdx___children___id'
  | 'image___childrenMdx___excerpt'
  | 'image___childrenMdx___fields___slug'
  | 'image___childrenMdx___fileAbsolutePath'
  | 'image___childrenMdx___frontmatter___createdAt'
  | 'image___childrenMdx___frontmatter___description'
  | 'image___childrenMdx___frontmatter___duration'
  | 'image___childrenMdx___frontmatter___gallery'
  | 'image___childrenMdx___frontmatter___price'
  | 'image___childrenMdx___frontmatter___template'
  | 'image___childrenMdx___frontmatter___title'
  | 'image___childrenMdx___headings'
  | 'image___childrenMdx___headings___depth'
  | 'image___childrenMdx___headings___value'
  | 'image___childrenMdx___html'
  | 'image___childrenMdx___id'
  | 'image___childrenMdx___internal___content'
  | 'image___childrenMdx___internal___contentDigest'
  | 'image___childrenMdx___internal___description'
  | 'image___childrenMdx___internal___fieldOwners'
  | 'image___childrenMdx___internal___ignoreType'
  | 'image___childrenMdx___internal___mediaType'
  | 'image___childrenMdx___internal___owner'
  | 'image___childrenMdx___internal___type'
  | 'image___childrenMdx___mdxAST'
  | 'image___childrenMdx___parent___children'
  | 'image___childrenMdx___parent___id'
  | 'image___childrenMdx___rawBody'
  | 'image___childrenMdx___slug'
  | 'image___childrenMdx___tableOfContents'
  | 'image___childrenMdx___timeToRead'
  | 'image___childrenMdx___wordCount___paragraphs'
  | 'image___childrenMdx___wordCount___sentences'
  | 'image___childrenMdx___wordCount___words'
  | 'image___childrenTestimonialsYaml'
  | 'image___childrenTestimonialsYaml___avatar___absolutePath'
  | 'image___childrenTestimonialsYaml___avatar___accessTime'
  | 'image___childrenTestimonialsYaml___avatar___atime'
  | 'image___childrenTestimonialsYaml___avatar___atimeMs'
  | 'image___childrenTestimonialsYaml___avatar___base'
  | 'image___childrenTestimonialsYaml___avatar___birthTime'
  | 'image___childrenTestimonialsYaml___avatar___birthtime'
  | 'image___childrenTestimonialsYaml___avatar___birthtimeMs'
  | 'image___childrenTestimonialsYaml___avatar___blksize'
  | 'image___childrenTestimonialsYaml___avatar___blocks'
  | 'image___childrenTestimonialsYaml___avatar___changeTime'
  | 'image___childrenTestimonialsYaml___avatar___children'
  | 'image___childrenTestimonialsYaml___avatar___childrenGalleryYaml'
  | 'image___childrenTestimonialsYaml___avatar___childrenImageSharp'
  | 'image___childrenTestimonialsYaml___avatar___childrenMdx'
  | 'image___childrenTestimonialsYaml___avatar___childrenTestimonialsYaml'
  | 'image___childrenTestimonialsYaml___avatar___ctime'
  | 'image___childrenTestimonialsYaml___avatar___ctimeMs'
  | 'image___childrenTestimonialsYaml___avatar___dev'
  | 'image___childrenTestimonialsYaml___avatar___dir'
  | 'image___childrenTestimonialsYaml___avatar___ext'
  | 'image___childrenTestimonialsYaml___avatar___extension'
  | 'image___childrenTestimonialsYaml___avatar___gid'
  | 'image___childrenTestimonialsYaml___avatar___id'
  | 'image___childrenTestimonialsYaml___avatar___ino'
  | 'image___childrenTestimonialsYaml___avatar___mode'
  | 'image___childrenTestimonialsYaml___avatar___modifiedTime'
  | 'image___childrenTestimonialsYaml___avatar___mtime'
  | 'image___childrenTestimonialsYaml___avatar___mtimeMs'
  | 'image___childrenTestimonialsYaml___avatar___name'
  | 'image___childrenTestimonialsYaml___avatar___nlink'
  | 'image___childrenTestimonialsYaml___avatar___prettySize'
  | 'image___childrenTestimonialsYaml___avatar___publicURL'
  | 'image___childrenTestimonialsYaml___avatar___rdev'
  | 'image___childrenTestimonialsYaml___avatar___relativeDirectory'
  | 'image___childrenTestimonialsYaml___avatar___relativePath'
  | 'image___childrenTestimonialsYaml___avatar___root'
  | 'image___childrenTestimonialsYaml___avatar___size'
  | 'image___childrenTestimonialsYaml___avatar___sourceInstanceName'
  | 'image___childrenTestimonialsYaml___avatar___uid'
  | 'image___childrenTestimonialsYaml___children'
  | 'image___childrenTestimonialsYaml___children___children'
  | 'image___childrenTestimonialsYaml___children___id'
  | 'image___childrenTestimonialsYaml___excursion___name'
  | 'image___childrenTestimonialsYaml___fullName'
  | 'image___childrenTestimonialsYaml___id'
  | 'image___childrenTestimonialsYaml___internal___content'
  | 'image___childrenTestimonialsYaml___internal___contentDigest'
  | 'image___childrenTestimonialsYaml___internal___description'
  | 'image___childrenTestimonialsYaml___internal___fieldOwners'
  | 'image___childrenTestimonialsYaml___internal___ignoreType'
  | 'image___childrenTestimonialsYaml___internal___mediaType'
  | 'image___childrenTestimonialsYaml___internal___owner'
  | 'image___childrenTestimonialsYaml___internal___type'
  | 'image___childrenTestimonialsYaml___parent___children'
  | 'image___childrenTestimonialsYaml___parent___id'
  | 'image___childrenTestimonialsYaml___text'
  | 'image___children___children'
  | 'image___children___children___children'
  | 'image___children___children___id'
  | 'image___children___id'
  | 'image___children___internal___content'
  | 'image___children___internal___contentDigest'
  | 'image___children___internal___description'
  | 'image___children___internal___fieldOwners'
  | 'image___children___internal___ignoreType'
  | 'image___children___internal___mediaType'
  | 'image___children___internal___owner'
  | 'image___children___internal___type'
  | 'image___children___parent___children'
  | 'image___children___parent___id'
  | 'image___ctime'
  | 'image___ctimeMs'
  | 'image___dev'
  | 'image___dir'
  | 'image___ext'
  | 'image___extension'
  | 'image___gid'
  | 'image___id'
  | 'image___ino'
  | 'image___internal___content'
  | 'image___internal___contentDigest'
  | 'image___internal___description'
  | 'image___internal___fieldOwners'
  | 'image___internal___ignoreType'
  | 'image___internal___mediaType'
  | 'image___internal___owner'
  | 'image___internal___type'
  | 'image___mode'
  | 'image___modifiedTime'
  | 'image___mtime'
  | 'image___mtimeMs'
  | 'image___name'
  | 'image___nlink'
  | 'image___parent___children'
  | 'image___parent___children___children'
  | 'image___parent___children___id'
  | 'image___parent___id'
  | 'image___parent___internal___content'
  | 'image___parent___internal___contentDigest'
  | 'image___parent___internal___description'
  | 'image___parent___internal___fieldOwners'
  | 'image___parent___internal___ignoreType'
  | 'image___parent___internal___mediaType'
  | 'image___parent___internal___owner'
  | 'image___parent___internal___type'
  | 'image___parent___parent___children'
  | 'image___parent___parent___id'
  | 'image___prettySize'
  | 'image___publicURL'
  | 'image___rdev'
  | 'image___relativeDirectory'
  | 'image___relativePath'
  | 'image___root'
  | 'image___size'
  | 'image___sourceInstanceName'
  | 'image___uid'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'title';

export type GalleryYamlFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<FileFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type GalleryYamlFilterListInput = {
  elemMatch?: InputMaybe<GalleryYamlFilterInput>;
};

export type GalleryYamlGroupConnection = {
  __typename?: 'GalleryYamlGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GalleryYamlEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GalleryYamlGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GalleryYaml>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type GalleryYamlGroupConnectionDistinctArgs = {
  field: GalleryYamlFieldsEnum;
};

export type GalleryYamlGroupConnectionGroupArgs = {
  field: GalleryYamlFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type GalleryYamlGroupConnectionMaxArgs = {
  field: GalleryYamlFieldsEnum;
};

export type GalleryYamlGroupConnectionMinArgs = {
  field: GalleryYamlFieldsEnum;
};

export type GalleryYamlGroupConnectionSumArgs = {
  field: GalleryYamlFieldsEnum;
};

export type GalleryYamlSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GalleryYamlFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type HeadingsMdx = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type ImageCropFocus =
  | 'ATTENTION'
  | 'CENTER'
  | 'EAST'
  | 'ENTROPY'
  | 'NORTH'
  | 'NORTHEAST'
  | 'NORTHWEST'
  | 'SOUTH'
  | 'SOUTHEAST'
  | 'SOUTHWEST'
  | 'WEST';

export type ImageFit = 'CONTAIN' | 'COVER' | 'FILL' | 'INSIDE' | 'OUTSIDE';

export type ImageFormat = 'AUTO' | 'AVIF' | 'JPG' | 'NO_CHANGE' | 'PNG' | 'WEBP';

export type ImageLayout = 'CONSTRAINED' | 'FIXED' | 'FULL_WIDTH';

export type ImagePlaceholder = 'BLURRED' | 'DOMINANT_COLOR' | 'NONE' | 'TRACED_SVG';

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  children: Array<Node>;
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  internal: Internal;
  original?: Maybe<ImageSharpOriginal>;
  parent?: Maybe<Node>;
  resize?: Maybe<ImageSharpResize>;
};

export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  avifOptions?: InputMaybe<AvifOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  height?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  pngOptions?: InputMaybe<PngOptions>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  transformOptions?: InputMaybe<TransformOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'fixed___aspectRatio'
  | 'fixed___base64'
  | 'fixed___height'
  | 'fixed___originalName'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcSetWebp'
  | 'fixed___srcWebp'
  | 'fixed___tracedSVG'
  | 'fixed___width'
  | 'fluid___aspectRatio'
  | 'fluid___base64'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationHeight'
  | 'fluid___presentationWidth'
  | 'fluid___sizes'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcSetWebp'
  | 'fluid___srcWebp'
  | 'fluid___tracedSVG'
  | 'gatsbyImageData'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'original___height'
  | 'original___src'
  | 'original___width'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'resize___aspectRatio'
  | 'resize___height'
  | 'resize___originalName'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width';

export type ImageSharpFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  aspectRatio?: Maybe<Scalars['Float']>;
  base64?: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  originalName?: Maybe<Scalars['String']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width: Scalars['Float'];
};

export type ImageSharpFixedFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  aspectRatio: Scalars['Float'];
  base64?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationHeight: Scalars['Int'];
  presentationWidth: Scalars['Int'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ImageSharpOriginalFilterInput = {
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Int']>;
  originalName?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  progressive?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  ne?: InputMaybe<Scalars['JSON']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
};

export type Mdx = Node & {
  __typename?: 'Mdx';
  body: Scalars['String'];
  children: Array<Node>;
  excerpt: Scalars['String'];
  fields?: Maybe<MdxFields>;
  fileAbsolutePath: Scalars['String'];
  frontmatter?: Maybe<MdxFrontmatter>;
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>;
  html?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  mdxAST?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  rawBody: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  tableOfContents?: Maybe<Scalars['JSON']>;
  timeToRead?: Maybe<Scalars['Int']>;
  wordCount?: Maybe<MdxWordCount>;
};

export type MdxExcerptArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};

export type MdxHeadingsArgs = {
  depth?: InputMaybe<HeadingsMdx>;
};

export type MdxTableOfContentsArgs = {
  maxDepth?: InputMaybe<Scalars['Int']>;
};

export type MdxConnection = {
  __typename?: 'MdxConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<MdxEdge>;
  group: Array<MdxGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionGroupArgs = {
  field: MdxFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type MdxConnectionMaxArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionMinArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionSumArgs = {
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  __typename?: 'MdxEdge';
  next?: Maybe<Mdx>;
  node: Mdx;
  previous?: Maybe<Mdx>;
};

export type MdxFields = {
  __typename?: 'MdxFields';
  slug?: Maybe<Scalars['String']>;
};

export type MdxFieldsEnum =
  | 'body'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'excerpt'
  | 'fields___slug'
  | 'fileAbsolutePath'
  | 'frontmatter___coverImage___absolutePath'
  | 'frontmatter___coverImage___accessTime'
  | 'frontmatter___coverImage___atime'
  | 'frontmatter___coverImage___atimeMs'
  | 'frontmatter___coverImage___base'
  | 'frontmatter___coverImage___birthTime'
  | 'frontmatter___coverImage___birthtime'
  | 'frontmatter___coverImage___birthtimeMs'
  | 'frontmatter___coverImage___blksize'
  | 'frontmatter___coverImage___blocks'
  | 'frontmatter___coverImage___changeTime'
  | 'frontmatter___coverImage___childGalleryYaml___children'
  | 'frontmatter___coverImage___childGalleryYaml___id'
  | 'frontmatter___coverImage___childGalleryYaml___title'
  | 'frontmatter___coverImage___childImageSharp___children'
  | 'frontmatter___coverImage___childImageSharp___gatsbyImageData'
  | 'frontmatter___coverImage___childImageSharp___id'
  | 'frontmatter___coverImage___childMdx___body'
  | 'frontmatter___coverImage___childMdx___children'
  | 'frontmatter___coverImage___childMdx___excerpt'
  | 'frontmatter___coverImage___childMdx___fileAbsolutePath'
  | 'frontmatter___coverImage___childMdx___headings'
  | 'frontmatter___coverImage___childMdx___html'
  | 'frontmatter___coverImage___childMdx___id'
  | 'frontmatter___coverImage___childMdx___mdxAST'
  | 'frontmatter___coverImage___childMdx___rawBody'
  | 'frontmatter___coverImage___childMdx___slug'
  | 'frontmatter___coverImage___childMdx___tableOfContents'
  | 'frontmatter___coverImage___childMdx___timeToRead'
  | 'frontmatter___coverImage___childTestimonialsYaml___children'
  | 'frontmatter___coverImage___childTestimonialsYaml___fullName'
  | 'frontmatter___coverImage___childTestimonialsYaml___id'
  | 'frontmatter___coverImage___childTestimonialsYaml___text'
  | 'frontmatter___coverImage___children'
  | 'frontmatter___coverImage___childrenGalleryYaml'
  | 'frontmatter___coverImage___childrenGalleryYaml___children'
  | 'frontmatter___coverImage___childrenGalleryYaml___id'
  | 'frontmatter___coverImage___childrenGalleryYaml___title'
  | 'frontmatter___coverImage___childrenImageSharp'
  | 'frontmatter___coverImage___childrenImageSharp___children'
  | 'frontmatter___coverImage___childrenImageSharp___gatsbyImageData'
  | 'frontmatter___coverImage___childrenImageSharp___id'
  | 'frontmatter___coverImage___childrenMdx'
  | 'frontmatter___coverImage___childrenMdx___body'
  | 'frontmatter___coverImage___childrenMdx___children'
  | 'frontmatter___coverImage___childrenMdx___excerpt'
  | 'frontmatter___coverImage___childrenMdx___fileAbsolutePath'
  | 'frontmatter___coverImage___childrenMdx___headings'
  | 'frontmatter___coverImage___childrenMdx___html'
  | 'frontmatter___coverImage___childrenMdx___id'
  | 'frontmatter___coverImage___childrenMdx___mdxAST'
  | 'frontmatter___coverImage___childrenMdx___rawBody'
  | 'frontmatter___coverImage___childrenMdx___slug'
  | 'frontmatter___coverImage___childrenMdx___tableOfContents'
  | 'frontmatter___coverImage___childrenMdx___timeToRead'
  | 'frontmatter___coverImage___childrenTestimonialsYaml'
  | 'frontmatter___coverImage___childrenTestimonialsYaml___children'
  | 'frontmatter___coverImage___childrenTestimonialsYaml___fullName'
  | 'frontmatter___coverImage___childrenTestimonialsYaml___id'
  | 'frontmatter___coverImage___childrenTestimonialsYaml___text'
  | 'frontmatter___coverImage___children___children'
  | 'frontmatter___coverImage___children___id'
  | 'frontmatter___coverImage___ctime'
  | 'frontmatter___coverImage___ctimeMs'
  | 'frontmatter___coverImage___dev'
  | 'frontmatter___coverImage___dir'
  | 'frontmatter___coverImage___ext'
  | 'frontmatter___coverImage___extension'
  | 'frontmatter___coverImage___gid'
  | 'frontmatter___coverImage___id'
  | 'frontmatter___coverImage___ino'
  | 'frontmatter___coverImage___internal___content'
  | 'frontmatter___coverImage___internal___contentDigest'
  | 'frontmatter___coverImage___internal___description'
  | 'frontmatter___coverImage___internal___fieldOwners'
  | 'frontmatter___coverImage___internal___ignoreType'
  | 'frontmatter___coverImage___internal___mediaType'
  | 'frontmatter___coverImage___internal___owner'
  | 'frontmatter___coverImage___internal___type'
  | 'frontmatter___coverImage___mode'
  | 'frontmatter___coverImage___modifiedTime'
  | 'frontmatter___coverImage___mtime'
  | 'frontmatter___coverImage___mtimeMs'
  | 'frontmatter___coverImage___name'
  | 'frontmatter___coverImage___nlink'
  | 'frontmatter___coverImage___parent___children'
  | 'frontmatter___coverImage___parent___id'
  | 'frontmatter___coverImage___prettySize'
  | 'frontmatter___coverImage___publicURL'
  | 'frontmatter___coverImage___rdev'
  | 'frontmatter___coverImage___relativeDirectory'
  | 'frontmatter___coverImage___relativePath'
  | 'frontmatter___coverImage___root'
  | 'frontmatter___coverImage___size'
  | 'frontmatter___coverImage___sourceInstanceName'
  | 'frontmatter___coverImage___uid'
  | 'frontmatter___createdAt'
  | 'frontmatter___description'
  | 'frontmatter___duration'
  | 'frontmatter___gallery'
  | 'frontmatter___gallery___absolutePath'
  | 'frontmatter___gallery___accessTime'
  | 'frontmatter___gallery___atime'
  | 'frontmatter___gallery___atimeMs'
  | 'frontmatter___gallery___base'
  | 'frontmatter___gallery___birthTime'
  | 'frontmatter___gallery___birthtime'
  | 'frontmatter___gallery___birthtimeMs'
  | 'frontmatter___gallery___blksize'
  | 'frontmatter___gallery___blocks'
  | 'frontmatter___gallery___changeTime'
  | 'frontmatter___gallery___childGalleryYaml___children'
  | 'frontmatter___gallery___childGalleryYaml___id'
  | 'frontmatter___gallery___childGalleryYaml___title'
  | 'frontmatter___gallery___childImageSharp___children'
  | 'frontmatter___gallery___childImageSharp___gatsbyImageData'
  | 'frontmatter___gallery___childImageSharp___id'
  | 'frontmatter___gallery___childMdx___body'
  | 'frontmatter___gallery___childMdx___children'
  | 'frontmatter___gallery___childMdx___excerpt'
  | 'frontmatter___gallery___childMdx___fileAbsolutePath'
  | 'frontmatter___gallery___childMdx___headings'
  | 'frontmatter___gallery___childMdx___html'
  | 'frontmatter___gallery___childMdx___id'
  | 'frontmatter___gallery___childMdx___mdxAST'
  | 'frontmatter___gallery___childMdx___rawBody'
  | 'frontmatter___gallery___childMdx___slug'
  | 'frontmatter___gallery___childMdx___tableOfContents'
  | 'frontmatter___gallery___childMdx___timeToRead'
  | 'frontmatter___gallery___childTestimonialsYaml___children'
  | 'frontmatter___gallery___childTestimonialsYaml___fullName'
  | 'frontmatter___gallery___childTestimonialsYaml___id'
  | 'frontmatter___gallery___childTestimonialsYaml___text'
  | 'frontmatter___gallery___children'
  | 'frontmatter___gallery___childrenGalleryYaml'
  | 'frontmatter___gallery___childrenGalleryYaml___children'
  | 'frontmatter___gallery___childrenGalleryYaml___id'
  | 'frontmatter___gallery___childrenGalleryYaml___title'
  | 'frontmatter___gallery___childrenImageSharp'
  | 'frontmatter___gallery___childrenImageSharp___children'
  | 'frontmatter___gallery___childrenImageSharp___gatsbyImageData'
  | 'frontmatter___gallery___childrenImageSharp___id'
  | 'frontmatter___gallery___childrenMdx'
  | 'frontmatter___gallery___childrenMdx___body'
  | 'frontmatter___gallery___childrenMdx___children'
  | 'frontmatter___gallery___childrenMdx___excerpt'
  | 'frontmatter___gallery___childrenMdx___fileAbsolutePath'
  | 'frontmatter___gallery___childrenMdx___headings'
  | 'frontmatter___gallery___childrenMdx___html'
  | 'frontmatter___gallery___childrenMdx___id'
  | 'frontmatter___gallery___childrenMdx___mdxAST'
  | 'frontmatter___gallery___childrenMdx___rawBody'
  | 'frontmatter___gallery___childrenMdx___slug'
  | 'frontmatter___gallery___childrenMdx___tableOfContents'
  | 'frontmatter___gallery___childrenMdx___timeToRead'
  | 'frontmatter___gallery___childrenTestimonialsYaml'
  | 'frontmatter___gallery___childrenTestimonialsYaml___children'
  | 'frontmatter___gallery___childrenTestimonialsYaml___fullName'
  | 'frontmatter___gallery___childrenTestimonialsYaml___id'
  | 'frontmatter___gallery___childrenTestimonialsYaml___text'
  | 'frontmatter___gallery___children___children'
  | 'frontmatter___gallery___children___id'
  | 'frontmatter___gallery___ctime'
  | 'frontmatter___gallery___ctimeMs'
  | 'frontmatter___gallery___dev'
  | 'frontmatter___gallery___dir'
  | 'frontmatter___gallery___ext'
  | 'frontmatter___gallery___extension'
  | 'frontmatter___gallery___gid'
  | 'frontmatter___gallery___id'
  | 'frontmatter___gallery___ino'
  | 'frontmatter___gallery___internal___content'
  | 'frontmatter___gallery___internal___contentDigest'
  | 'frontmatter___gallery___internal___description'
  | 'frontmatter___gallery___internal___fieldOwners'
  | 'frontmatter___gallery___internal___ignoreType'
  | 'frontmatter___gallery___internal___mediaType'
  | 'frontmatter___gallery___internal___owner'
  | 'frontmatter___gallery___internal___type'
  | 'frontmatter___gallery___mode'
  | 'frontmatter___gallery___modifiedTime'
  | 'frontmatter___gallery___mtime'
  | 'frontmatter___gallery___mtimeMs'
  | 'frontmatter___gallery___name'
  | 'frontmatter___gallery___nlink'
  | 'frontmatter___gallery___parent___children'
  | 'frontmatter___gallery___parent___id'
  | 'frontmatter___gallery___prettySize'
  | 'frontmatter___gallery___publicURL'
  | 'frontmatter___gallery___rdev'
  | 'frontmatter___gallery___relativeDirectory'
  | 'frontmatter___gallery___relativePath'
  | 'frontmatter___gallery___root'
  | 'frontmatter___gallery___size'
  | 'frontmatter___gallery___sourceInstanceName'
  | 'frontmatter___gallery___uid'
  | 'frontmatter___price'
  | 'frontmatter___template'
  | 'frontmatter___title'
  | 'headings'
  | 'headings___depth'
  | 'headings___value'
  | 'html'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'mdxAST'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'rawBody'
  | 'slug'
  | 'tableOfContents'
  | 'timeToRead'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words';

export type MdxFieldsFilterInput = {
  slug?: InputMaybe<StringQueryOperatorInput>;
};

export type MdxFilterInput = {
  body?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  fields?: InputMaybe<MdxFieldsFilterInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MdxFrontmatterFilterInput>;
  headings?: InputMaybe<MdxHeadingMdxFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mdxAST?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  rawBody?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  tableOfContents?: InputMaybe<JsonQueryOperatorInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  wordCount?: InputMaybe<MdxWordCountFilterInput>;
};

export type MdxFilterListInput = {
  elemMatch?: InputMaybe<MdxFilterInput>;
};

export type MdxFrontmatter = {
  __typename?: 'MdxFrontmatter';
  coverImage?: Maybe<File>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['String']>;
  gallery?: Maybe<Array<Maybe<File>>>;
  price?: Maybe<Scalars['Int']>;
  template?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type MdxFrontmatterCreatedAtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type MdxFrontmatterFilterInput = {
  coverImage?: InputMaybe<FileFilterInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  duration?: InputMaybe<StringQueryOperatorInput>;
  gallery?: InputMaybe<FileFilterListInput>;
  price?: InputMaybe<IntQueryOperatorInput>;
  template?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type MdxGroupConnection = {
  __typename?: 'MdxGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<MdxEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<MdxGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type MdxGroupConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};

export type MdxGroupConnectionGroupArgs = {
  field: MdxFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type MdxGroupConnectionMaxArgs = {
  field: MdxFieldsEnum;
};

export type MdxGroupConnectionMinArgs = {
  field: MdxFieldsEnum;
};

export type MdxGroupConnectionSumArgs = {
  field: MdxFieldsEnum;
};

export type MdxHeadingMdx = {
  __typename?: 'MdxHeadingMdx';
  depth?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type MdxHeadingMdxFilterInput = {
  depth?: InputMaybe<IntQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: InputMaybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
  fields?: InputMaybe<Array<InputMaybe<MdxFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
  __typename?: 'MdxWordCount';
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MdxWordCountFilterInput = {
  paragraphs?: InputMaybe<IntQueryOperatorInput>;
  sentences?: InputMaybe<IntQueryOperatorInput>;
  words?: InputMaybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type NodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type PngOptions = {
  compressionSpeed?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  alphaMax?: InputMaybe<Scalars['Float']>;
  background?: InputMaybe<Scalars['String']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  turdSize?: InputMaybe<Scalars['Float']>;
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_MAJORITY'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_WHITE';

export type Query = {
  __typename?: 'Query';
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allGalleryYaml: GalleryYamlConnection;
  allImageSharp: ImageSharpConnection;
  allMdx: MdxConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  allTestimonialsYaml: TestimonialsYamlConnection;
  directory?: Maybe<Directory>;
  file?: Maybe<File>;
  galleryYaml?: Maybe<GalleryYaml>;
  imageSharp?: Maybe<ImageSharp>;
  mdx?: Maybe<Mdx>;
  site?: Maybe<Site>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  siteFunction?: Maybe<SiteFunction>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
  testimonialsYaml?: Maybe<TestimonialsYaml>;
};

export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<DirectorySortInput>;
};

export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FileSortInput>;
};

export type QueryAllGalleryYamlArgs = {
  filter?: InputMaybe<GalleryYamlFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GalleryYamlSortInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ImageSharpSortInput>;
};

export type QueryAllMdxArgs = {
  filter?: InputMaybe<MdxFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<MdxSortInput>;
};

export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteSortInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
};

export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteFunctionSortInput>;
};

export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SitePageSortInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SitePluginSortInput>;
};

export type QueryAllTestimonialsYamlArgs = {
  filter?: InputMaybe<TestimonialsYamlFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<TestimonialsYamlSortInput>;
};

export type QueryDirectoryArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type QueryFileArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childGalleryYaml?: InputMaybe<GalleryYamlFilterInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childMdx?: InputMaybe<MdxFilterInput>;
  childTestimonialsYaml?: InputMaybe<TestimonialsYamlFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenGalleryYaml?: InputMaybe<GalleryYamlFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childrenMdx?: InputMaybe<MdxFilterListInput>;
  childrenTestimonialsYaml?: InputMaybe<TestimonialsYamlFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type QueryGalleryYamlArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<FileFilterInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type QueryImageSharpArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type QueryMdxArgs = {
  body?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  fields?: InputMaybe<MdxFieldsFilterInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MdxFrontmatterFilterInput>;
  headings?: InputMaybe<MdxHeadingMdxFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mdxAST?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  rawBody?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  tableOfContents?: InputMaybe<JsonQueryOperatorInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  wordCount?: InputMaybe<MdxWordCountFilterInput>;
};

export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
};

export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySitePageArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type QuerySitePluginArgs = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type QueryTestimonialsYamlArgs = {
  avatar?: InputMaybe<FileFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  excursion?: InputMaybe<TestimonialsYamlExcursionFilterInput>;
  fullName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  host?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  jsxRuntime?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  port?: Maybe<Scalars['Int']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
};

export type SiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id';

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'host'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'jsxRuntime'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'pathPrefix'
  | 'polyfill'
  | 'port'
  | 'siteMetadata___description'
  | 'siteMetadata___image'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___title'
  | 'siteMetadata___titleTemplate';

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
};

export type SiteFunction = Node & {
  __typename?: 'SiteFunction';
  absoluteCompiledFilePath: Scalars['String'];
  children: Array<Node>;
  functionRoute: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  matchPath?: Maybe<Scalars['String']>;
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  parent?: Maybe<Node>;
  pluginName: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
};

export type SiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge';
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'absoluteCompiledFilePath'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'functionRoute'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'matchPath'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'pluginName'
  | 'relativeCompiledFilePath';

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  children: Array<Node>;
  component: Scalars['String'];
  componentChunkName: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  internalComponentName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  path: Scalars['String'];
  pluginCreator?: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'component'
  | 'componentChunkName'
  | 'id'
  | 'internalComponentName'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'matchPath'
  | 'pageContext'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'path'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___id'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___name'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___resolve'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___version';

export type SitePageFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  resolve?: Maybe<Scalars['String']>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'browserAPIs'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'nodeAPIs'
  | 'packageJson'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'resolve'
  | 'ssrAPIs'
  | 'version';

export type SitePluginFilterInput = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  titleTemplate?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  description?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  titleTemplate?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 'ASC' | 'DESC';

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type TestimonialsYaml = Node & {
  __typename?: 'TestimonialsYaml';
  avatar?: Maybe<File>;
  children: Array<Node>;
  excursion?: Maybe<TestimonialsYamlExcursion>;
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
  text?: Maybe<Scalars['String']>;
};

export type TestimonialsYamlConnection = {
  __typename?: 'TestimonialsYamlConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<TestimonialsYamlEdge>;
  group: Array<TestimonialsYamlGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<TestimonialsYaml>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type TestimonialsYamlConnectionDistinctArgs = {
  field: TestimonialsYamlFieldsEnum;
};

export type TestimonialsYamlConnectionGroupArgs = {
  field: TestimonialsYamlFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type TestimonialsYamlConnectionMaxArgs = {
  field: TestimonialsYamlFieldsEnum;
};

export type TestimonialsYamlConnectionMinArgs = {
  field: TestimonialsYamlFieldsEnum;
};

export type TestimonialsYamlConnectionSumArgs = {
  field: TestimonialsYamlFieldsEnum;
};

export type TestimonialsYamlEdge = {
  __typename?: 'TestimonialsYamlEdge';
  next?: Maybe<TestimonialsYaml>;
  node: TestimonialsYaml;
  previous?: Maybe<TestimonialsYaml>;
};

export type TestimonialsYamlExcursion = {
  __typename?: 'TestimonialsYamlExcursion';
  name?: Maybe<Scalars['String']>;
};

export type TestimonialsYamlExcursionFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
};

export type TestimonialsYamlFieldsEnum =
  | 'avatar___absolutePath'
  | 'avatar___accessTime'
  | 'avatar___atime'
  | 'avatar___atimeMs'
  | 'avatar___base'
  | 'avatar___birthTime'
  | 'avatar___birthtime'
  | 'avatar___birthtimeMs'
  | 'avatar___blksize'
  | 'avatar___blocks'
  | 'avatar___changeTime'
  | 'avatar___childGalleryYaml___children'
  | 'avatar___childGalleryYaml___children___children'
  | 'avatar___childGalleryYaml___children___id'
  | 'avatar___childGalleryYaml___id'
  | 'avatar___childGalleryYaml___image___absolutePath'
  | 'avatar___childGalleryYaml___image___accessTime'
  | 'avatar___childGalleryYaml___image___atime'
  | 'avatar___childGalleryYaml___image___atimeMs'
  | 'avatar___childGalleryYaml___image___base'
  | 'avatar___childGalleryYaml___image___birthTime'
  | 'avatar___childGalleryYaml___image___birthtime'
  | 'avatar___childGalleryYaml___image___birthtimeMs'
  | 'avatar___childGalleryYaml___image___blksize'
  | 'avatar___childGalleryYaml___image___blocks'
  | 'avatar___childGalleryYaml___image___changeTime'
  | 'avatar___childGalleryYaml___image___children'
  | 'avatar___childGalleryYaml___image___childrenGalleryYaml'
  | 'avatar___childGalleryYaml___image___childrenImageSharp'
  | 'avatar___childGalleryYaml___image___childrenMdx'
  | 'avatar___childGalleryYaml___image___childrenTestimonialsYaml'
  | 'avatar___childGalleryYaml___image___ctime'
  | 'avatar___childGalleryYaml___image___ctimeMs'
  | 'avatar___childGalleryYaml___image___dev'
  | 'avatar___childGalleryYaml___image___dir'
  | 'avatar___childGalleryYaml___image___ext'
  | 'avatar___childGalleryYaml___image___extension'
  | 'avatar___childGalleryYaml___image___gid'
  | 'avatar___childGalleryYaml___image___id'
  | 'avatar___childGalleryYaml___image___ino'
  | 'avatar___childGalleryYaml___image___mode'
  | 'avatar___childGalleryYaml___image___modifiedTime'
  | 'avatar___childGalleryYaml___image___mtime'
  | 'avatar___childGalleryYaml___image___mtimeMs'
  | 'avatar___childGalleryYaml___image___name'
  | 'avatar___childGalleryYaml___image___nlink'
  | 'avatar___childGalleryYaml___image___prettySize'
  | 'avatar___childGalleryYaml___image___publicURL'
  | 'avatar___childGalleryYaml___image___rdev'
  | 'avatar___childGalleryYaml___image___relativeDirectory'
  | 'avatar___childGalleryYaml___image___relativePath'
  | 'avatar___childGalleryYaml___image___root'
  | 'avatar___childGalleryYaml___image___size'
  | 'avatar___childGalleryYaml___image___sourceInstanceName'
  | 'avatar___childGalleryYaml___image___uid'
  | 'avatar___childGalleryYaml___internal___content'
  | 'avatar___childGalleryYaml___internal___contentDigest'
  | 'avatar___childGalleryYaml___internal___description'
  | 'avatar___childGalleryYaml___internal___fieldOwners'
  | 'avatar___childGalleryYaml___internal___ignoreType'
  | 'avatar___childGalleryYaml___internal___mediaType'
  | 'avatar___childGalleryYaml___internal___owner'
  | 'avatar___childGalleryYaml___internal___type'
  | 'avatar___childGalleryYaml___parent___children'
  | 'avatar___childGalleryYaml___parent___id'
  | 'avatar___childGalleryYaml___title'
  | 'avatar___childImageSharp___children'
  | 'avatar___childImageSharp___children___children'
  | 'avatar___childImageSharp___children___id'
  | 'avatar___childImageSharp___fixed___aspectRatio'
  | 'avatar___childImageSharp___fixed___base64'
  | 'avatar___childImageSharp___fixed___height'
  | 'avatar___childImageSharp___fixed___originalName'
  | 'avatar___childImageSharp___fixed___src'
  | 'avatar___childImageSharp___fixed___srcSet'
  | 'avatar___childImageSharp___fixed___srcSetWebp'
  | 'avatar___childImageSharp___fixed___srcWebp'
  | 'avatar___childImageSharp___fixed___tracedSVG'
  | 'avatar___childImageSharp___fixed___width'
  | 'avatar___childImageSharp___fluid___aspectRatio'
  | 'avatar___childImageSharp___fluid___base64'
  | 'avatar___childImageSharp___fluid___originalImg'
  | 'avatar___childImageSharp___fluid___originalName'
  | 'avatar___childImageSharp___fluid___presentationHeight'
  | 'avatar___childImageSharp___fluid___presentationWidth'
  | 'avatar___childImageSharp___fluid___sizes'
  | 'avatar___childImageSharp___fluid___src'
  | 'avatar___childImageSharp___fluid___srcSet'
  | 'avatar___childImageSharp___fluid___srcSetWebp'
  | 'avatar___childImageSharp___fluid___srcWebp'
  | 'avatar___childImageSharp___fluid___tracedSVG'
  | 'avatar___childImageSharp___gatsbyImageData'
  | 'avatar___childImageSharp___id'
  | 'avatar___childImageSharp___internal___content'
  | 'avatar___childImageSharp___internal___contentDigest'
  | 'avatar___childImageSharp___internal___description'
  | 'avatar___childImageSharp___internal___fieldOwners'
  | 'avatar___childImageSharp___internal___ignoreType'
  | 'avatar___childImageSharp___internal___mediaType'
  | 'avatar___childImageSharp___internal___owner'
  | 'avatar___childImageSharp___internal___type'
  | 'avatar___childImageSharp___original___height'
  | 'avatar___childImageSharp___original___src'
  | 'avatar___childImageSharp___original___width'
  | 'avatar___childImageSharp___parent___children'
  | 'avatar___childImageSharp___parent___id'
  | 'avatar___childImageSharp___resize___aspectRatio'
  | 'avatar___childImageSharp___resize___height'
  | 'avatar___childImageSharp___resize___originalName'
  | 'avatar___childImageSharp___resize___src'
  | 'avatar___childImageSharp___resize___tracedSVG'
  | 'avatar___childImageSharp___resize___width'
  | 'avatar___childMdx___body'
  | 'avatar___childMdx___children'
  | 'avatar___childMdx___children___children'
  | 'avatar___childMdx___children___id'
  | 'avatar___childMdx___excerpt'
  | 'avatar___childMdx___fields___slug'
  | 'avatar___childMdx___fileAbsolutePath'
  | 'avatar___childMdx___frontmatter___createdAt'
  | 'avatar___childMdx___frontmatter___description'
  | 'avatar___childMdx___frontmatter___duration'
  | 'avatar___childMdx___frontmatter___gallery'
  | 'avatar___childMdx___frontmatter___price'
  | 'avatar___childMdx___frontmatter___template'
  | 'avatar___childMdx___frontmatter___title'
  | 'avatar___childMdx___headings'
  | 'avatar___childMdx___headings___depth'
  | 'avatar___childMdx___headings___value'
  | 'avatar___childMdx___html'
  | 'avatar___childMdx___id'
  | 'avatar___childMdx___internal___content'
  | 'avatar___childMdx___internal___contentDigest'
  | 'avatar___childMdx___internal___description'
  | 'avatar___childMdx___internal___fieldOwners'
  | 'avatar___childMdx___internal___ignoreType'
  | 'avatar___childMdx___internal___mediaType'
  | 'avatar___childMdx___internal___owner'
  | 'avatar___childMdx___internal___type'
  | 'avatar___childMdx___mdxAST'
  | 'avatar___childMdx___parent___children'
  | 'avatar___childMdx___parent___id'
  | 'avatar___childMdx___rawBody'
  | 'avatar___childMdx___slug'
  | 'avatar___childMdx___tableOfContents'
  | 'avatar___childMdx___timeToRead'
  | 'avatar___childMdx___wordCount___paragraphs'
  | 'avatar___childMdx___wordCount___sentences'
  | 'avatar___childMdx___wordCount___words'
  | 'avatar___childTestimonialsYaml___avatar___absolutePath'
  | 'avatar___childTestimonialsYaml___avatar___accessTime'
  | 'avatar___childTestimonialsYaml___avatar___atime'
  | 'avatar___childTestimonialsYaml___avatar___atimeMs'
  | 'avatar___childTestimonialsYaml___avatar___base'
  | 'avatar___childTestimonialsYaml___avatar___birthTime'
  | 'avatar___childTestimonialsYaml___avatar___birthtime'
  | 'avatar___childTestimonialsYaml___avatar___birthtimeMs'
  | 'avatar___childTestimonialsYaml___avatar___blksize'
  | 'avatar___childTestimonialsYaml___avatar___blocks'
  | 'avatar___childTestimonialsYaml___avatar___changeTime'
  | 'avatar___childTestimonialsYaml___avatar___children'
  | 'avatar___childTestimonialsYaml___avatar___childrenGalleryYaml'
  | 'avatar___childTestimonialsYaml___avatar___childrenImageSharp'
  | 'avatar___childTestimonialsYaml___avatar___childrenMdx'
  | 'avatar___childTestimonialsYaml___avatar___childrenTestimonialsYaml'
  | 'avatar___childTestimonialsYaml___avatar___ctime'
  | 'avatar___childTestimonialsYaml___avatar___ctimeMs'
  | 'avatar___childTestimonialsYaml___avatar___dev'
  | 'avatar___childTestimonialsYaml___avatar___dir'
  | 'avatar___childTestimonialsYaml___avatar___ext'
  | 'avatar___childTestimonialsYaml___avatar___extension'
  | 'avatar___childTestimonialsYaml___avatar___gid'
  | 'avatar___childTestimonialsYaml___avatar___id'
  | 'avatar___childTestimonialsYaml___avatar___ino'
  | 'avatar___childTestimonialsYaml___avatar___mode'
  | 'avatar___childTestimonialsYaml___avatar___modifiedTime'
  | 'avatar___childTestimonialsYaml___avatar___mtime'
  | 'avatar___childTestimonialsYaml___avatar___mtimeMs'
  | 'avatar___childTestimonialsYaml___avatar___name'
  | 'avatar___childTestimonialsYaml___avatar___nlink'
  | 'avatar___childTestimonialsYaml___avatar___prettySize'
  | 'avatar___childTestimonialsYaml___avatar___publicURL'
  | 'avatar___childTestimonialsYaml___avatar___rdev'
  | 'avatar___childTestimonialsYaml___avatar___relativeDirectory'
  | 'avatar___childTestimonialsYaml___avatar___relativePath'
  | 'avatar___childTestimonialsYaml___avatar___root'
  | 'avatar___childTestimonialsYaml___avatar___size'
  | 'avatar___childTestimonialsYaml___avatar___sourceInstanceName'
  | 'avatar___childTestimonialsYaml___avatar___uid'
  | 'avatar___childTestimonialsYaml___children'
  | 'avatar___childTestimonialsYaml___children___children'
  | 'avatar___childTestimonialsYaml___children___id'
  | 'avatar___childTestimonialsYaml___excursion___name'
  | 'avatar___childTestimonialsYaml___fullName'
  | 'avatar___childTestimonialsYaml___id'
  | 'avatar___childTestimonialsYaml___internal___content'
  | 'avatar___childTestimonialsYaml___internal___contentDigest'
  | 'avatar___childTestimonialsYaml___internal___description'
  | 'avatar___childTestimonialsYaml___internal___fieldOwners'
  | 'avatar___childTestimonialsYaml___internal___ignoreType'
  | 'avatar___childTestimonialsYaml___internal___mediaType'
  | 'avatar___childTestimonialsYaml___internal___owner'
  | 'avatar___childTestimonialsYaml___internal___type'
  | 'avatar___childTestimonialsYaml___parent___children'
  | 'avatar___childTestimonialsYaml___parent___id'
  | 'avatar___childTestimonialsYaml___text'
  | 'avatar___children'
  | 'avatar___childrenGalleryYaml'
  | 'avatar___childrenGalleryYaml___children'
  | 'avatar___childrenGalleryYaml___children___children'
  | 'avatar___childrenGalleryYaml___children___id'
  | 'avatar___childrenGalleryYaml___id'
  | 'avatar___childrenGalleryYaml___image___absolutePath'
  | 'avatar___childrenGalleryYaml___image___accessTime'
  | 'avatar___childrenGalleryYaml___image___atime'
  | 'avatar___childrenGalleryYaml___image___atimeMs'
  | 'avatar___childrenGalleryYaml___image___base'
  | 'avatar___childrenGalleryYaml___image___birthTime'
  | 'avatar___childrenGalleryYaml___image___birthtime'
  | 'avatar___childrenGalleryYaml___image___birthtimeMs'
  | 'avatar___childrenGalleryYaml___image___blksize'
  | 'avatar___childrenGalleryYaml___image___blocks'
  | 'avatar___childrenGalleryYaml___image___changeTime'
  | 'avatar___childrenGalleryYaml___image___children'
  | 'avatar___childrenGalleryYaml___image___childrenGalleryYaml'
  | 'avatar___childrenGalleryYaml___image___childrenImageSharp'
  | 'avatar___childrenGalleryYaml___image___childrenMdx'
  | 'avatar___childrenGalleryYaml___image___childrenTestimonialsYaml'
  | 'avatar___childrenGalleryYaml___image___ctime'
  | 'avatar___childrenGalleryYaml___image___ctimeMs'
  | 'avatar___childrenGalleryYaml___image___dev'
  | 'avatar___childrenGalleryYaml___image___dir'
  | 'avatar___childrenGalleryYaml___image___ext'
  | 'avatar___childrenGalleryYaml___image___extension'
  | 'avatar___childrenGalleryYaml___image___gid'
  | 'avatar___childrenGalleryYaml___image___id'
  | 'avatar___childrenGalleryYaml___image___ino'
  | 'avatar___childrenGalleryYaml___image___mode'
  | 'avatar___childrenGalleryYaml___image___modifiedTime'
  | 'avatar___childrenGalleryYaml___image___mtime'
  | 'avatar___childrenGalleryYaml___image___mtimeMs'
  | 'avatar___childrenGalleryYaml___image___name'
  | 'avatar___childrenGalleryYaml___image___nlink'
  | 'avatar___childrenGalleryYaml___image___prettySize'
  | 'avatar___childrenGalleryYaml___image___publicURL'
  | 'avatar___childrenGalleryYaml___image___rdev'
  | 'avatar___childrenGalleryYaml___image___relativeDirectory'
  | 'avatar___childrenGalleryYaml___image___relativePath'
  | 'avatar___childrenGalleryYaml___image___root'
  | 'avatar___childrenGalleryYaml___image___size'
  | 'avatar___childrenGalleryYaml___image___sourceInstanceName'
  | 'avatar___childrenGalleryYaml___image___uid'
  | 'avatar___childrenGalleryYaml___internal___content'
  | 'avatar___childrenGalleryYaml___internal___contentDigest'
  | 'avatar___childrenGalleryYaml___internal___description'
  | 'avatar___childrenGalleryYaml___internal___fieldOwners'
  | 'avatar___childrenGalleryYaml___internal___ignoreType'
  | 'avatar___childrenGalleryYaml___internal___mediaType'
  | 'avatar___childrenGalleryYaml___internal___owner'
  | 'avatar___childrenGalleryYaml___internal___type'
  | 'avatar___childrenGalleryYaml___parent___children'
  | 'avatar___childrenGalleryYaml___parent___id'
  | 'avatar___childrenGalleryYaml___title'
  | 'avatar___childrenImageSharp'
  | 'avatar___childrenImageSharp___children'
  | 'avatar___childrenImageSharp___children___children'
  | 'avatar___childrenImageSharp___children___id'
  | 'avatar___childrenImageSharp___fixed___aspectRatio'
  | 'avatar___childrenImageSharp___fixed___base64'
  | 'avatar___childrenImageSharp___fixed___height'
  | 'avatar___childrenImageSharp___fixed___originalName'
  | 'avatar___childrenImageSharp___fixed___src'
  | 'avatar___childrenImageSharp___fixed___srcSet'
  | 'avatar___childrenImageSharp___fixed___srcSetWebp'
  | 'avatar___childrenImageSharp___fixed___srcWebp'
  | 'avatar___childrenImageSharp___fixed___tracedSVG'
  | 'avatar___childrenImageSharp___fixed___width'
  | 'avatar___childrenImageSharp___fluid___aspectRatio'
  | 'avatar___childrenImageSharp___fluid___base64'
  | 'avatar___childrenImageSharp___fluid___originalImg'
  | 'avatar___childrenImageSharp___fluid___originalName'
  | 'avatar___childrenImageSharp___fluid___presentationHeight'
  | 'avatar___childrenImageSharp___fluid___presentationWidth'
  | 'avatar___childrenImageSharp___fluid___sizes'
  | 'avatar___childrenImageSharp___fluid___src'
  | 'avatar___childrenImageSharp___fluid___srcSet'
  | 'avatar___childrenImageSharp___fluid___srcSetWebp'
  | 'avatar___childrenImageSharp___fluid___srcWebp'
  | 'avatar___childrenImageSharp___fluid___tracedSVG'
  | 'avatar___childrenImageSharp___gatsbyImageData'
  | 'avatar___childrenImageSharp___id'
  | 'avatar___childrenImageSharp___internal___content'
  | 'avatar___childrenImageSharp___internal___contentDigest'
  | 'avatar___childrenImageSharp___internal___description'
  | 'avatar___childrenImageSharp___internal___fieldOwners'
  | 'avatar___childrenImageSharp___internal___ignoreType'
  | 'avatar___childrenImageSharp___internal___mediaType'
  | 'avatar___childrenImageSharp___internal___owner'
  | 'avatar___childrenImageSharp___internal___type'
  | 'avatar___childrenImageSharp___original___height'
  | 'avatar___childrenImageSharp___original___src'
  | 'avatar___childrenImageSharp___original___width'
  | 'avatar___childrenImageSharp___parent___children'
  | 'avatar___childrenImageSharp___parent___id'
  | 'avatar___childrenImageSharp___resize___aspectRatio'
  | 'avatar___childrenImageSharp___resize___height'
  | 'avatar___childrenImageSharp___resize___originalName'
  | 'avatar___childrenImageSharp___resize___src'
  | 'avatar___childrenImageSharp___resize___tracedSVG'
  | 'avatar___childrenImageSharp___resize___width'
  | 'avatar___childrenMdx'
  | 'avatar___childrenMdx___body'
  | 'avatar___childrenMdx___children'
  | 'avatar___childrenMdx___children___children'
  | 'avatar___childrenMdx___children___id'
  | 'avatar___childrenMdx___excerpt'
  | 'avatar___childrenMdx___fields___slug'
  | 'avatar___childrenMdx___fileAbsolutePath'
  | 'avatar___childrenMdx___frontmatter___createdAt'
  | 'avatar___childrenMdx___frontmatter___description'
  | 'avatar___childrenMdx___frontmatter___duration'
  | 'avatar___childrenMdx___frontmatter___gallery'
  | 'avatar___childrenMdx___frontmatter___price'
  | 'avatar___childrenMdx___frontmatter___template'
  | 'avatar___childrenMdx___frontmatter___title'
  | 'avatar___childrenMdx___headings'
  | 'avatar___childrenMdx___headings___depth'
  | 'avatar___childrenMdx___headings___value'
  | 'avatar___childrenMdx___html'
  | 'avatar___childrenMdx___id'
  | 'avatar___childrenMdx___internal___content'
  | 'avatar___childrenMdx___internal___contentDigest'
  | 'avatar___childrenMdx___internal___description'
  | 'avatar___childrenMdx___internal___fieldOwners'
  | 'avatar___childrenMdx___internal___ignoreType'
  | 'avatar___childrenMdx___internal___mediaType'
  | 'avatar___childrenMdx___internal___owner'
  | 'avatar___childrenMdx___internal___type'
  | 'avatar___childrenMdx___mdxAST'
  | 'avatar___childrenMdx___parent___children'
  | 'avatar___childrenMdx___parent___id'
  | 'avatar___childrenMdx___rawBody'
  | 'avatar___childrenMdx___slug'
  | 'avatar___childrenMdx___tableOfContents'
  | 'avatar___childrenMdx___timeToRead'
  | 'avatar___childrenMdx___wordCount___paragraphs'
  | 'avatar___childrenMdx___wordCount___sentences'
  | 'avatar___childrenMdx___wordCount___words'
  | 'avatar___childrenTestimonialsYaml'
  | 'avatar___childrenTestimonialsYaml___avatar___absolutePath'
  | 'avatar___childrenTestimonialsYaml___avatar___accessTime'
  | 'avatar___childrenTestimonialsYaml___avatar___atime'
  | 'avatar___childrenTestimonialsYaml___avatar___atimeMs'
  | 'avatar___childrenTestimonialsYaml___avatar___base'
  | 'avatar___childrenTestimonialsYaml___avatar___birthTime'
  | 'avatar___childrenTestimonialsYaml___avatar___birthtime'
  | 'avatar___childrenTestimonialsYaml___avatar___birthtimeMs'
  | 'avatar___childrenTestimonialsYaml___avatar___blksize'
  | 'avatar___childrenTestimonialsYaml___avatar___blocks'
  | 'avatar___childrenTestimonialsYaml___avatar___changeTime'
  | 'avatar___childrenTestimonialsYaml___avatar___children'
  | 'avatar___childrenTestimonialsYaml___avatar___childrenGalleryYaml'
  | 'avatar___childrenTestimonialsYaml___avatar___childrenImageSharp'
  | 'avatar___childrenTestimonialsYaml___avatar___childrenMdx'
  | 'avatar___childrenTestimonialsYaml___avatar___childrenTestimonialsYaml'
  | 'avatar___childrenTestimonialsYaml___avatar___ctime'
  | 'avatar___childrenTestimonialsYaml___avatar___ctimeMs'
  | 'avatar___childrenTestimonialsYaml___avatar___dev'
  | 'avatar___childrenTestimonialsYaml___avatar___dir'
  | 'avatar___childrenTestimonialsYaml___avatar___ext'
  | 'avatar___childrenTestimonialsYaml___avatar___extension'
  | 'avatar___childrenTestimonialsYaml___avatar___gid'
  | 'avatar___childrenTestimonialsYaml___avatar___id'
  | 'avatar___childrenTestimonialsYaml___avatar___ino'
  | 'avatar___childrenTestimonialsYaml___avatar___mode'
  | 'avatar___childrenTestimonialsYaml___avatar___modifiedTime'
  | 'avatar___childrenTestimonialsYaml___avatar___mtime'
  | 'avatar___childrenTestimonialsYaml___avatar___mtimeMs'
  | 'avatar___childrenTestimonialsYaml___avatar___name'
  | 'avatar___childrenTestimonialsYaml___avatar___nlink'
  | 'avatar___childrenTestimonialsYaml___avatar___prettySize'
  | 'avatar___childrenTestimonialsYaml___avatar___publicURL'
  | 'avatar___childrenTestimonialsYaml___avatar___rdev'
  | 'avatar___childrenTestimonialsYaml___avatar___relativeDirectory'
  | 'avatar___childrenTestimonialsYaml___avatar___relativePath'
  | 'avatar___childrenTestimonialsYaml___avatar___root'
  | 'avatar___childrenTestimonialsYaml___avatar___size'
  | 'avatar___childrenTestimonialsYaml___avatar___sourceInstanceName'
  | 'avatar___childrenTestimonialsYaml___avatar___uid'
  | 'avatar___childrenTestimonialsYaml___children'
  | 'avatar___childrenTestimonialsYaml___children___children'
  | 'avatar___childrenTestimonialsYaml___children___id'
  | 'avatar___childrenTestimonialsYaml___excursion___name'
  | 'avatar___childrenTestimonialsYaml___fullName'
  | 'avatar___childrenTestimonialsYaml___id'
  | 'avatar___childrenTestimonialsYaml___internal___content'
  | 'avatar___childrenTestimonialsYaml___internal___contentDigest'
  | 'avatar___childrenTestimonialsYaml___internal___description'
  | 'avatar___childrenTestimonialsYaml___internal___fieldOwners'
  | 'avatar___childrenTestimonialsYaml___internal___ignoreType'
  | 'avatar___childrenTestimonialsYaml___internal___mediaType'
  | 'avatar___childrenTestimonialsYaml___internal___owner'
  | 'avatar___childrenTestimonialsYaml___internal___type'
  | 'avatar___childrenTestimonialsYaml___parent___children'
  | 'avatar___childrenTestimonialsYaml___parent___id'
  | 'avatar___childrenTestimonialsYaml___text'
  | 'avatar___children___children'
  | 'avatar___children___children___children'
  | 'avatar___children___children___id'
  | 'avatar___children___id'
  | 'avatar___children___internal___content'
  | 'avatar___children___internal___contentDigest'
  | 'avatar___children___internal___description'
  | 'avatar___children___internal___fieldOwners'
  | 'avatar___children___internal___ignoreType'
  | 'avatar___children___internal___mediaType'
  | 'avatar___children___internal___owner'
  | 'avatar___children___internal___type'
  | 'avatar___children___parent___children'
  | 'avatar___children___parent___id'
  | 'avatar___ctime'
  | 'avatar___ctimeMs'
  | 'avatar___dev'
  | 'avatar___dir'
  | 'avatar___ext'
  | 'avatar___extension'
  | 'avatar___gid'
  | 'avatar___id'
  | 'avatar___ino'
  | 'avatar___internal___content'
  | 'avatar___internal___contentDigest'
  | 'avatar___internal___description'
  | 'avatar___internal___fieldOwners'
  | 'avatar___internal___ignoreType'
  | 'avatar___internal___mediaType'
  | 'avatar___internal___owner'
  | 'avatar___internal___type'
  | 'avatar___mode'
  | 'avatar___modifiedTime'
  | 'avatar___mtime'
  | 'avatar___mtimeMs'
  | 'avatar___name'
  | 'avatar___nlink'
  | 'avatar___parent___children'
  | 'avatar___parent___children___children'
  | 'avatar___parent___children___id'
  | 'avatar___parent___id'
  | 'avatar___parent___internal___content'
  | 'avatar___parent___internal___contentDigest'
  | 'avatar___parent___internal___description'
  | 'avatar___parent___internal___fieldOwners'
  | 'avatar___parent___internal___ignoreType'
  | 'avatar___parent___internal___mediaType'
  | 'avatar___parent___internal___owner'
  | 'avatar___parent___internal___type'
  | 'avatar___parent___parent___children'
  | 'avatar___parent___parent___id'
  | 'avatar___prettySize'
  | 'avatar___publicURL'
  | 'avatar___rdev'
  | 'avatar___relativeDirectory'
  | 'avatar___relativePath'
  | 'avatar___root'
  | 'avatar___size'
  | 'avatar___sourceInstanceName'
  | 'avatar___uid'
  | 'children'
  | 'children___children'
  | 'children___children___children'
  | 'children___children___children___children'
  | 'children___children___children___id'
  | 'children___children___id'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___parent___children'
  | 'children___children___parent___id'
  | 'children___id'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___parent___children'
  | 'children___parent___children___children'
  | 'children___parent___children___id'
  | 'children___parent___id'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___parent___children'
  | 'children___parent___parent___id'
  | 'excursion___name'
  | 'fullName'
  | 'id'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'parent___children'
  | 'parent___children___children'
  | 'parent___children___children___children'
  | 'parent___children___children___id'
  | 'parent___children___id'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___parent___children'
  | 'parent___children___parent___id'
  | 'parent___id'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___parent___children'
  | 'parent___parent___children___children'
  | 'parent___parent___children___id'
  | 'parent___parent___id'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___parent___children'
  | 'parent___parent___parent___id'
  | 'text';

export type TestimonialsYamlFilterInput = {
  avatar?: InputMaybe<FileFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  excursion?: InputMaybe<TestimonialsYamlExcursionFilterInput>;
  fullName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
};

export type TestimonialsYamlFilterListInput = {
  elemMatch?: InputMaybe<TestimonialsYamlFilterInput>;
};

export type TestimonialsYamlGroupConnection = {
  __typename?: 'TestimonialsYamlGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<TestimonialsYamlEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<TestimonialsYamlGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<TestimonialsYaml>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type TestimonialsYamlGroupConnectionDistinctArgs = {
  field: TestimonialsYamlFieldsEnum;
};

export type TestimonialsYamlGroupConnectionGroupArgs = {
  field: TestimonialsYamlFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type TestimonialsYamlGroupConnectionMaxArgs = {
  field: TestimonialsYamlFieldsEnum;
};

export type TestimonialsYamlGroupConnectionMinArgs = {
  field: TestimonialsYamlFieldsEnum;
};

export type TestimonialsYamlGroupConnectionSumArgs = {
  field: TestimonialsYamlFieldsEnum;
};

export type TestimonialsYamlSortInput = {
  fields?: InputMaybe<Array<InputMaybe<TestimonialsYamlFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type TransformOptions = {
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type GatsbyImageSharpFixedFragment = {
  __typename?: 'ImageSharpFixed';
  base64?: string | null | undefined;
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_TracedSvgFragment = {
  __typename?: 'ImageSharpFixed';
  tracedSVG?: string | null | undefined;
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_WithWebpFragment = {
  __typename?: 'ImageSharpFixed';
  base64?: string | null | undefined;
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null | undefined;
  srcSetWebp?: string | null | undefined;
};

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpFixed';
  tracedSVG?: string | null | undefined;
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null | undefined;
  srcSetWebp?: string | null | undefined;
};

export type GatsbyImageSharpFixed_NoBase64Fragment = {
  __typename?: 'ImageSharpFixed';
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpFixed';
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null | undefined;
  srcSetWebp?: string | null | undefined;
};

export type GatsbyImageSharpFluidFragment = {
  __typename?: 'ImageSharpFluid';
  base64?: string | null | undefined;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
  __typename?: 'ImageSharpFluid';
  maxHeight: number;
  maxWidth: number;
};

export type GatsbyImageSharpFluid_TracedSvgFragment = {
  __typename?: 'ImageSharpFluid';
  tracedSVG?: string | null | undefined;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebpFragment = {
  __typename?: 'ImageSharpFluid';
  base64?: string | null | undefined;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null | undefined;
  srcSetWebp?: string | null | undefined;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpFluid';
  tracedSVG?: string | null | undefined;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null | undefined;
  srcSetWebp?: string | null | undefined;
  sizes: string;
};

export type GatsbyImageSharpFluid_NoBase64Fragment = {
  __typename?: 'ImageSharpFluid';
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpFluid';
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null | undefined;
  srcSetWebp?: string | null | undefined;
  sizes: string;
};

export type PagesQueryQueryVariables = Exact<{ [key: string]: never }>;

export type PagesQueryQuery = {
  __typename?: 'Query';
  allSiteFunction: {
    __typename?: 'SiteFunctionConnection';
    nodes: Array<{ __typename?: 'SiteFunction'; functionRoute: string }>;
  };
  allSitePage: {
    __typename?: 'SitePageConnection';
    nodes: Array<{ __typename?: 'SitePage'; path: string }>;
  };
};

export type ExcursionsContent_ExcursionsQueryVariables = Exact<{ [key: string]: never }>;

export type ExcursionsContent_ExcursionsQuery = {
  __typename?: 'Query';
  allMdx: {
    __typename?: 'MdxConnection';
    nodes: Array<{
      __typename?: 'Mdx';
      id: string;
      fields?:
        | { __typename?: 'MdxFields'; slug?: string | null | undefined }
        | null
        | undefined;
      frontmatter?:
        | {
            __typename?: 'MdxFrontmatter';
            description?: string | null | undefined;
            duration?: string | null | undefined;
            price?: number | null | undefined;
            title: string;
            coverImage?:
              | {
                  __typename?: 'File';
                  childImageSharp?:
                    | {
                        __typename?: 'ImageSharp';
                        fluid?:
                          | {
                              __typename?: 'ImageSharpFluid';
                              base64?: string | null | undefined;
                              aspectRatio: number;
                              src: string;
                              srcSet: string;
                              srcWebp?: string | null | undefined;
                              srcSetWebp?: string | null | undefined;
                              sizes: string;
                            }
                          | null
                          | undefined;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
    }>;
  };
};

export type ExcursionsSection_ExcursionsQueryVariables = Exact<{ [key: string]: never }>;

export type ExcursionsSection_ExcursionsQuery = {
  __typename?: 'Query';
  allMdx: {
    __typename?: 'MdxConnection';
    nodes: Array<{
      __typename?: 'Mdx';
      id: string;
      fields?:
        | { __typename?: 'MdxFields'; slug?: string | null | undefined }
        | null
        | undefined;
      frontmatter?:
        | {
            __typename?: 'MdxFrontmatter';
            description?: string | null | undefined;
            duration?: string | null | undefined;
            price?: number | null | undefined;
            title: string;
            coverImage?:
              | {
                  __typename?: 'File';
                  childImageSharp?:
                    | {
                        __typename?: 'ImageSharp';
                        fluid?:
                          | {
                              __typename?: 'ImageSharpFluid';
                              base64?: string | null | undefined;
                              aspectRatio: number;
                              src: string;
                              srcSet: string;
                              srcWebp?: string | null | undefined;
                              srcSetWebp?: string | null | undefined;
                              sizes: string;
                            }
                          | null
                          | undefined;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
    }>;
  };
};

export type GallerySection_GalleryQueryVariables = Exact<{ [key: string]: never }>;

export type GallerySection_GalleryQuery = {
  __typename?: 'Query';
  allGalleryYaml: {
    __typename?: 'GalleryYamlConnection';
    nodes: Array<{
      __typename?: 'GalleryYaml';
      title?: string | null | undefined;
      image?:
        | {
            __typename?: 'File';
            childImageSharp?:
              | {
                  __typename?: 'ImageSharp';
                  fluid?:
                    | {
                        __typename?: 'ImageSharpFluid';
                        base64?: string | null | undefined;
                        aspectRatio: number;
                        src: string;
                        srcSet: string;
                        srcWebp?: string | null | undefined;
                        srcSetWebp?: string | null | undefined;
                        sizes: string;
                      }
                    | null
                    | undefined;
                  original?:
                    | {
                        __typename?: 'ImageSharpOriginal';
                        src?: string | null | undefined;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
    }>;
  };
};

export type HeroSection_ProfilePhotoQueryVariables = Exact<{ [key: string]: never }>;

export type HeroSection_ProfilePhotoQuery = {
  __typename?: 'Query';
  profilePhoto?:
    | {
        __typename?: 'File';
        childImageSharp?:
          | {
              __typename?: 'ImageSharp';
              fluid?:
                | {
                    __typename?: 'ImageSharpFluid';
                    base64?: string | null | undefined;
                    aspectRatio: number;
                    src: string;
                    srcSet: string;
                    srcWebp?: string | null | undefined;
                    srcSetWebp?: string | null | undefined;
                    sizes: string;
                  }
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
  backgroundMobile?:
    | {
        __typename?: 'File';
        childImageSharp?:
          | {
              __typename?: 'ImageSharp';
              fluid?:
                | {
                    __typename?: 'ImageSharpFluid';
                    base64?: string | null | undefined;
                    aspectRatio: number;
                    src: string;
                    srcSet: string;
                    srcWebp?: string | null | undefined;
                    srcSetWebp?: string | null | undefined;
                    sizes: string;
                  }
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
  background?:
    | {
        __typename?: 'File';
        childImageSharp?:
          | {
              __typename?: 'ImageSharp';
              fluid?:
                | {
                    __typename?: 'ImageSharpFluid';
                    base64?: string | null | undefined;
                    aspectRatio: number;
                    src: string;
                    srcSet: string;
                    srcWebp?: string | null | undefined;
                    srcSetWebp?: string | null | undefined;
                    sizes: string;
                  }
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type TestimonialsSection_TestimonialsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type TestimonialsSection_TestimonialsQuery = {
  __typename?: 'Query';
  allTestimonialsYaml: {
    __typename?: 'TestimonialsYamlConnection';
    nodes: Array<{
      __typename?: 'TestimonialsYaml';
      id: string;
      fullName?: string | null | undefined;
      text?: string | null | undefined;
      avatar?:
        | {
            __typename?: 'File';
            childImageSharp?:
              | {
                  __typename?: 'ImageSharp';
                  fixed?:
                    | {
                        __typename?: 'ImageSharpFixed';
                        base64?: string | null | undefined;
                        width: number;
                        height: number;
                        src: string;
                        srcSet: string;
                        srcWebp?: string | null | undefined;
                        srcSetWebp?: string | null | undefined;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
      excursion?:
        | { __typename?: 'TestimonialsYamlExcursion'; name?: string | null | undefined }
        | null
        | undefined;
    }>;
  };
};

export type SeoQueryVariables = Exact<{ [key: string]: never }>;

export type SeoQuery = {
  __typename?: 'Query';
  site?:
    | {
        __typename?: 'Site';
        siteMetadata?:
          | {
              __typename?: 'SiteSiteMetadata';
              titleTemplate?: string | null | undefined;
              siteUrl?: string | null | undefined;
              defaultTitle?: string | null | undefined;
              defaultDescription?: string | null | undefined;
              defaultImage?: string | null | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type ExcursionCardCoverFragment = {
  __typename?: 'File';
  childImageSharp?:
    | {
        __typename?: 'ImageSharp';
        fluid?:
          | {
              __typename?: 'ImageSharpFluid';
              base64?: string | null | undefined;
              aspectRatio: number;
              src: string;
              srcSet: string;
              srcWebp?: string | null | undefined;
              srcSetWebp?: string | null | undefined;
              sizes: string;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type ExcursionCoverFragment = {
  __typename?: 'File';
  childImageSharp?:
    | {
        __typename?: 'ImageSharp';
        cover?:
          | {
              __typename?: 'ImageSharpFluid';
              base64?: string | null | undefined;
              aspectRatio: number;
              src: string;
              srcSet: string;
              srcWebp?: string | null | undefined;
              srcSetWebp?: string | null | undefined;
              sizes: string;
            }
          | null
          | undefined;
        seo?: { __typename?: 'ImageSharpFixed'; src: string } | null | undefined;
      }
    | null
    | undefined;
};

export type ExcursionGalleryImageFragment = {
  __typename?: 'File';
  childImageSharp?:
    | {
        __typename?: 'ImageSharp';
        fluid?:
          | {
              __typename?: 'ImageSharpFluid';
              base64?: string | null | undefined;
              aspectRatio: number;
              src: string;
              srcSet: string;
              srcWebp?: string | null | undefined;
              srcSetWebp?: string | null | undefined;
              sizes: string;
            }
          | null
          | undefined;
        original?:
          | { __typename?: 'ImageSharpOriginal'; src?: string | null | undefined }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type TestimonialFragment = {
  __typename?: 'TestimonialsYaml';
  id: string;
  fullName?: string | null | undefined;
  text?: string | null | undefined;
  avatar?:
    | {
        __typename?: 'File';
        childImageSharp?:
          | {
              __typename?: 'ImageSharp';
              fixed?:
                | {
                    __typename?: 'ImageSharpFixed';
                    base64?: string | null | undefined;
                    width: number;
                    height: number;
                    src: string;
                    srcSet: string;
                    srcWebp?: string | null | undefined;
                    srcSetWebp?: string | null | undefined;
                  }
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
  excursion?:
    | { __typename?: 'TestimonialsYamlExcursion'; name?: string | null | undefined }
    | null
    | undefined;
};

export type ExcursionBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;

export type ExcursionBySlugQuery = {
  __typename?: 'Query';
  mdx?:
    | {
        __typename?: 'Mdx';
        body: string;
        frontmatter?:
          | {
              __typename?: 'MdxFrontmatter';
              title: string;
              duration?: string | null | undefined;
              price?: number | null | undefined;
              description?: string | null | undefined;
              coverImage?:
                | {
                    __typename?: 'File';
                    childImageSharp?:
                      | {
                          __typename?: 'ImageSharp';
                          cover?:
                            | {
                                __typename?: 'ImageSharpFluid';
                                base64?: string | null | undefined;
                                aspectRatio: number;
                                src: string;
                                srcSet: string;
                                srcWebp?: string | null | undefined;
                                srcSetWebp?: string | null | undefined;
                                sizes: string;
                              }
                            | null
                            | undefined;
                          seo?:
                            | { __typename?: 'ImageSharpFixed'; src: string }
                            | null
                            | undefined;
                        }
                      | null
                      | undefined;
                  }
                | null
                | undefined;
              gallery?:
                | Array<
                    | {
                        __typename?: 'File';
                        childImageSharp?:
                          | {
                              __typename?: 'ImageSharp';
                              fluid?:
                                | {
                                    __typename?: 'ImageSharpFluid';
                                    base64?: string | null | undefined;
                                    aspectRatio: number;
                                    src: string;
                                    srcSet: string;
                                    srcWebp?: string | null | undefined;
                                    srcSetWebp?: string | null | undefined;
                                    sizes: string;
                                  }
                                | null
                                | undefined;
                              original?:
                                | {
                                    __typename?: 'ImageSharpOriginal';
                                    src?: string | null | undefined;
                                  }
                                | null
                                | undefined;
                            }
                          | null
                          | undefined;
                      }
                    | null
                    | undefined
                  >
                | null
                | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};
