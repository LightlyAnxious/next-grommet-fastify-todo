import React, { ReactNode } from "react";
import { Card } from "grommet";
import Link from "next/link";

const CardCmp = ({ id, children }: { id: number; children: ReactNode }) => {
  return (
    <Link href={`todos/${id}`}>
      <Card key={id} pad="small" height={{ min: "48px" }}>
        {children}
      </Card>
    </Link>
  );
};

export default CardCmp;
