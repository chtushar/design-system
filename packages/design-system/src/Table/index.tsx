import React from "react";
import { useTable, useSortBy } from "react-table";
import styled from "styled-components";
import { ReactComponent as DownArrow } from "assets/icons/ads/down_arrow.svg";
import { ReactComponent as UpperArrow } from "assets/icons/ads/upper_arrow.svg";
import { Classes } from "Constants/classes";
import { typography } from "Constants/typography";

const Styles = styled.div`
  table {
    border-spacing: 0;
    width: 100%;

    thead {
      tr {
        background-color: var(--ads-color-black-25);

        th {
          padding: var(--ads-spaces-5) var(--ads-spaces-9);
          text-align: left;
          color: var(--ads-color-black-470);
          font-weight: var(--ads-font-weight-normal);
          font-size: ${typography.h6.fontSize}px;
          line-height: ${typography.h6.lineHeight}px;
          letter-spacing: ${typography.h6.letterSpacing}px;

          svg {
            margin-left: var(--ads-spaces-2);
            margin-bottom: 1px;
          }

          &:hover {
            color: var(--ads-color-black-850);
            cursor: pointer;
            svg {
              path {
                fill: var(--ads-color-black-850);
              }
            }
          }
        }
      }
    }

    tbody {
      tr {
        td:first-child {
          color: var(--ads-color-black-850);
          font-weight: var(--ads-font-weight-normal);
        }

        td {
          padding: var(--ads-spaces-4) var(--ads-spaces-9);
          color: var(--ads-color-black-550);
          font-size: ${typography.p1.fontSize}px;
          line-height: ${typography.p1.lineHeight}px;
          letter-spacing: ${typography.p1.letterSpacing}px;
          font-weight: normal;
          border-bottom: 1px solid var(--ads-old-color-mercury);
        }

        &:hover {
          background-color: var(--ads-color-black-75);
          .${Classes.ICON} {
            path {
              fill: var(--ads-old-color-gray-10);
            }
          }
          td:first-child {
            color: var(--ads-old-color-gray-10);
          }
          td {
            color: var(--ads-color-black-850);
          }
        }
      }
    }
  }
`;

const HiddenArrow = styled(DownArrow)`
  visibility: hidden;
`;
export interface TableProps {
  data: any[];
  columns: any[];
}

function Table(props: TableProps) {
  const { columns, data } = props;

  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable({ columns, data }, useSortBy);

  return (
    <Styles>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={index}
                >
                  {column.render("Header")}
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <UpperArrow />
                    ) : (
                      <DownArrow />
                    )
                  ) : (
                    <HiddenArrow />
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      data-colindex={index}
                      key={index}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Styles>
  );
}

export default Table;
